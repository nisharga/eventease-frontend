'use client';
import React, { useEffect } from 'react';
import { Header } from '../../components/Header';
import { useParams, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import EventDetails from './components/EventDetails';
import AttendeeRegister from './components/AttendeeRegister';

const EventRegister = () => {
    const router = useRouter();
    useEffect(() => {
        // Check for the `accessToken` in cookies
        const accessToken = Cookies.get('accessToken');

        if (!accessToken) {
            // Redirect to the login page if no token is found
            router.push('/auth/login');
        }
    }, [router]);
    const { id } = useParams();
    const paramsId = id?.[0];

    return (
        <div>
            <Header type='Event Register' />
            <div className='mb-6'>
                <div className='container'>
                    <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-12 bg-first-300 rounded-3xl px-8 py-10'>
                            <EventDetails paramsId={paramsId} />
                            <AttendeeRegister paramsId={paramsId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventRegister;
