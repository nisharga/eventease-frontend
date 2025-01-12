/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Loading from '@/app/auth/components/Loading';
interface FormData {
    email: string;
}

const ForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>();

    async function onSubmit(values: any) {
        console.log('🚀 ~ onSubmit ~ values:', values);
    }

    return (
        <div className='bg-white p-5 h-[100%] w-[550px] rounded-xl'>
            <h1 className=' font-semibold'>Forgot Password?</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-8 mt-5'>
                {/* Email Field */}
                <div className='mb-4'>
                    <label className='text-xs'>
                        Enter your email and we will send you a link to reset
                        your password.
                    </label>
                    <input
                        type='text'
                        {...register('email', {
                            required: 'Email is required'
                            // pattern: {
                            //   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            //   message: "Custom error: Enter a valid email address",
                            // },
                        })}
                        className={`border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:border-gray-600 focus:outline-none bg-white mt-1`}
                        placeholder='name@gmail.com'
                    />
                    {errors.email?.type === 'required' && (
                        <p className='text-red-500 text-xs mt-1'>
                            Please give your email
                        </p>
                    )}
                </div>
                <div className=''>
                    <button
                        type='submit'
                        className='w-full md:px-4 py-2.5 bg-[#723EEB] text-white text-xs rounded-3xl hover:bg-[#6129e6] duration-500'
                    >
                        {/* {loading ? <Loading /> : 'Send Link'} */}
                        Send Link
                    </button>
                </div>
                <div className='text-center flex justify-center mb-4 items-center gap-1'>
                    <div className='text-black text-sm flex justify-center items-center'>
                        Already Have An Account?
                        <div className='text-end text-[#723EEB] text-sm font-medium cursor-pointer ml-1'>
                            <Link href={'/auth/login'}>Login Now</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;
