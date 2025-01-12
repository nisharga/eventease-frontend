'use client';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import Logout from '../components/Logout';
import { useRouter } from 'next/navigation';

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
            User: <Logout />
        </div>
    );
};

export default User;
