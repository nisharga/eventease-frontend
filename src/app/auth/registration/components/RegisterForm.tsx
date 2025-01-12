/* eslint-disable @typescript-eslint/no-explicit-any */
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
import DropDown from '@/shared/DropDown';
import { handleRegister } from '../../actions';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const router = useRouter();
    // Handle change event
    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedValue(event.target.value); // Update state
    };

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
            acceptCondition: false
        }
    });

    // Define submit handler.
    const onSubmit = async (values: z.infer<typeof registrationSchema>) => {
        if (!values?.acceptCondition) {
            toast.error('You must agreed our Terms and Conditions');
        }
        if (!selectedValue) {
            toast.error('You must select a role');
        }

        const { acceptCondition, confirmPassword, ...userInfo } = values;

        const registerData = {
            ...userInfo,
            role: selectedValue
        };

        if (values?.acceptCondition && selectedValue) {
            try {
                setLoading(true);
                const res = await handleRegister(registerData);
                if (res.success === true) {
                    setLoading(false);
                    router.push('/auth/login');
                    toast.success('Check Email For Verification!');
                } else {
                    setLoading(false);
                    toast.error(res?.message);
                }
            } catch (error: any) {
                setLoading(false);
                toast.error(error?.message);
            }
        }
    };

    // input class
    const inputClass =
        '!py-5 bg-transparent border border-second-150 !rounded-[8px] placeholder:text-second-150 text-black';

    return (
        <div>
            {steps == 1 ? (
                <>
                    <div className='px-6 md:px-12 lg:px-24 text-center mb-4'>
                        <h5 className='text-black text-3xl font-bold mb-1.5'>
                            Registration
                        </h5>
                        <p className='text-second-900'>
                            Register as a User or an Attendee. Based on your
                            role, you will be shown personalized content.
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

                            <div className='py-2'>
                                <div className=''>
                                    <label
                                        htmlFor='dropdown'
                                        className='text-black font-medium pl-1 !text-base block mb-2'
                                    >
                                        Choose Your Role*
                                    </label>
                                    <select
                                        id='dropdown'
                                        value={selectedValue}
                                        onChange={handleSelectChange}
                                        className={`${inputClass} !py-2 !w-full`}
                                    >
                                        <option className='!pl-5'>
                                            Select Your Role
                                        </option>
                                        <option value='USER'>USER</option>
                                        <option value='ATTENDEE'>
                                            ATTENDEE
                                        </option>
                                    </select>
                                </div>
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
                                    className='py-3 w-full !flex items-center justify-center gap-3 bg-black rounded-[12px]'
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
