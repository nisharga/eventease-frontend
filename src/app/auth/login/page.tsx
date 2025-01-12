import React from 'react';
import { LoginSection } from './components';

const page = () => {
    return (
        <div className='container px-4 md:px-8'>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-12 gap-6 '>
                    <div className='lg:col-span-3'></div>
                    <div className='col-span-12 lg:col-span-6 flex items-center justify-center lg:px-8'>
                        <LoginSection />
                    </div>
                    <div className='lg:col-span-3'></div>
                </div>
            </div>
        </div>
    );
};

export default page;
