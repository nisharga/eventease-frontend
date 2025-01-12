/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Form } from '@/components/ui/form';
import { registrationSchema } from '@/schema/auth';
import FormInput from '@/shared/FormInput';
import RoundedBtn from '@/shared/RoundedBtn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import ConditionSignIn from '../../components/ConditionSignIn';
import CheckBox from './CheckBox';
import Loading from '../../components/Loading';

const RegisterForm = () => {
    const [loading, setLoading] = useState<boolean>();
    const [referCode, setReferCode] = useState<string>('');

    const [steps, setSteps] = useState(1);

    // Define init value.
    const form = useForm<z.infer<typeof registrationSchema>>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            code: '',
            acceptCondition: false
        }
    });

    // Define submit handler.
    const onSubmit = async (values: z.infer<typeof registrationSchema>) => {
        console.log('🚀 ~ onSubmit ~ values:', values);
    };

    // input class
    const inputClass =
        '!py-5 bg-transparent border border-second-150 !rounded-[8px] placeholder:text-second-150 text-black';

    return (
        <div>
            {steps == 1 ? (
                <>
                    <div className='px-6 md:px-12 lg:px-28 text-center mb-4'>
                        <h5 className='text-black text-3xl font-bold mb-1.5'>
                            ssssssssssssss
                        </h5>
                        <p className='text-second-900'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sint, ad!
                        </p>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className=''
                        >
                            <div className='mb-2'>
                                <FormInput
                                    label='Name*'
                                    labelClass='text-black font-medium pl-1 !text-base'
                                    form={form}
                                    name='name'
                                    placeholder='Enter Your Name'
                                    className={inputClass}
                                />
                            </div>
                            <div className=''>
                                <FormInput
                                    label='Email*'
                                    labelClass='text-black font-medium pl-1 !text-base'
                                    form={form}
                                    name='email'
                                    placeholder='Enter Your Email'
                                    className={inputClass}
                                />
                            </div>

                            <div className='mb-2'>
                                <FormInput
                                    label='Password*'
                                    type='password'
                                    labelClass='text-black font-medium pl-1 !text-base'
                                    form={form}
                                    name='password'
                                    placeholder='Choose password'
                                    className={inputClass}
                                />
                            </div>
                            <div className='mb-4'>
                                <FormInput
                                    label='Retype Password*'
                                    type='password'
                                    labelClass='text-black font-medium pl-1 !text-base'
                                    form={form}
                                    name='confirmPassword'
                                    placeholder='Confirm password'
                                    className={inputClass}
                                />
                            </div>
                            <div className='mb-3'>
                                <CheckBox form={form} />
                            </div>
                            <div className='mb-4'>
                                <RoundedBtn
                                    type='submit'
                                    className='py-3 w-full !flex items-center justify-center gap-3'
                                >
                                    {loading ? <Loading /> : 'Sign Up'}
                                </RoundedBtn>
                            </div>
                            <div>
                                <ConditionSignIn pageName='register' />
                            </div>
                        </form>
                    </Form>
                </>
            ) : steps === 2 ? (
                <>
                    <div className='px-6 md:px-12 lg:px-24 text-center mb-4'>
                        <h5 className='text-black text-xl font-bold mb-1.5'>
                            ssssss
                        </h5>
                        <p className='text-second-900 text-sm'>sssssss</p>
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
};

export default RegisterForm;
