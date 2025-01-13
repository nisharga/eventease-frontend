'use client';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../components/Header';
import EventList from './Components/EventList';
import AddEvent from './Components/AddEvent';

const User = () => {
    const router = useRouter();
    useEffect(() => {
        // Check for the `accessToken` in cookies
        const accessToken = Cookies.get('accessToken');

        if (!accessToken) {
            // Redirect to the login page if no token is found
            router.push('/auth/login');
        }
    }, [router]);

    return (
        <div>
            <Header type='User' />
            <div className='mb-6'>
                <div className='container'>
                    <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-12 lg:col-span-8 bg-first-300 rounded-3xl px-8 py-10'>
                            <EventList />
                        </div>
                        <div className='col-span-12 lg:col-span-4 overflow-hidden   bg-first-300 rounded-3xl px-8 py-10'>
                            <AddEvent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
