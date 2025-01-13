/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading';
import { emailVerify } from '../../actions/handleVerify';
type VerifyEmailProps = 'verified' | 'not-verified' | null | 'pending';

const VerifyEmail = () => {
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState('');
    const [isVerified, setIsVerified] = useState<VerifyEmailProps>('pending');
    const router = useRouter();
    const token = searchParams.get('token');

    useEffect(() => {
        if (token) {
            const verifyEmail = async (token: string) => {
                try {
                    setIsLoading(true);
                    await emailVerify(token);
                    setMessage(
                        'Your email has been verified successfully! You can now login.'
                    );
                    setIsVerified('verified');
                    toast.success('Email verified successfully');
                    router.push('/auth/login');
                } catch (error) {
                    setMessage(
                        'Verification failed. The token may have expired. Please request a new one.'
                    );
                    toast.error('Verification failed.');
                } finally {
                    setIsVerified('not-verified');
                    setIsLoading(false);
                }
            };

            verifyEmail(token);
        }
    }, [router, token]);

    return (
        <div className='auth-bg min-h-screen w-full flex items-center justify-center'>
            <div className='px-4'>
                <div className='bg-white rounded-xl shadow-lg px-5 py-7 w-full max-w-md md:w-[400px] text-center'>
                    <p className='text-gray-700 text-sm mb-4'>
                        {isLoading
                            ? 'Please wait while we verify your email...'
                            : message}
                    </p>
                    {isVerified === 'verified' && (
                        <button
                            className='bg-first-950 text-white font-medium text-sm border border-first-500 py-2 px-4 rounded-md hover:bg-first-1000 transition duration-200 w-full'
                            onClick={() => {
                                router.push('/auth/login');
                            }}
                        >
                            Go to Login
                        </button>
                    )}

                    {isVerified === 'not-verified' && (
                        <button
                            className='bg-first-950 text-white font-medium text-sm border border-first-500 py-2 px-4 rounded-md hover:bg-first-1000 transition duration-200 w-full'
                            onClick={() => {
                                router.push('/auth/login');
                            }}
                        >
                            Resend Email
                        </button>
                    )}

                    {isVerified === 'pending' && (
                        <button className='bg-first-950 text-white font-medium text-sm border border-first-500 py-2 px-4 rounded-md hover:bg-first-1000 transition duration-200 w-full'>
                            <Loading />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
