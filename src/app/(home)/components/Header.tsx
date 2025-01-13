import React from 'react';
import Logout from './Logout';
import Cookies from 'js-cookie';

export const Header = ({ type }: { type: string }) => {
    const userName = Cookies.get('name');
    return (
        <div className='bg-gray-300  mb-6'>
            <div className='container flex items-center justify-between py-4'>
                <div></div>
                <div className='text-3xl font-bold text-center'>{type}</div>
                <div className='flex items-center justify-center gap-2 '>
                    <span className='text-black font-semibold text-xl'>
                        {userName}
                    </span>
                    <Logout />
                </div>
            </div>
        </div>
    );
};
