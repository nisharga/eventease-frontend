'use client';
import ForgetPassword from '@/shared/ForgetPassword';

const page = () => {
    return (
        <div className='flex items-center bg-gradient-to-r from-pink-200 to-blue-200 min-h-screen w-full  justify-center'>
            <div className='px-4 max-w-[1200px] mx-auto'>
                <div className='md:flex md:justify-between gap-5 h-[288px]'>
                    <div className='w-[100%] md:w-[60%]'>
                        <ForgetPassword />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default page;
