'use client';

import RoundedBtn from '@/shared/RoundedBtn';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const router = useRouter();
    const handleClick = () => {
        // Remove cookies
        Cookies.remove('accessToken', { path: '/' });
        Cookies.remove('refreshToken', { path: '/' });
        Cookies.remove('name', { path: '/' });
        Cookies.remove('role', { path: '/' });

        // Remove session storage item
        sessionStorage.removeItem('hasShownWelcomeToast');
        router.push('/auth/login');
        // Optionally, redirect the user after logout
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
