'use client';

import RoundedBtn from '@/shared/RoundedBtn';
import Cookies from 'js-cookie';

const Logout = () => {
    const handleClick = () => {
        // Remove cookies
        Cookies.remove('accessToken', { path: '/' });
        Cookies.remove('refreshToken', { path: '/' });
        Cookies.remove('name', { path: '/' });
        Cookies.remove('role', { path: '/' });

        // Remove session storage item
        sessionStorage.removeItem('hasShownWelcomeToast');

        // Optionally, redirect the user after logout
        console.log('User logged out'); // For debugging
    };

    return (
        <div>
            <RoundedBtn
                onClick={handleClick}
                className='py-3 !px-6 !flex items-center justify-center gap-3 bg-black rounded-[12px]'
            >
                Logout
            </RoundedBtn>
        </div>
    );
};

export default Logout;
