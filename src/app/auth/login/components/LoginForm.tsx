/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Form } from '@/components/ui/form';
import { loginSchema } from '@/schema/auth';
import FormInput from '@/shared/FormInput';
import RoundedBtn from '@/shared/RoundedBtn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ConditionSignIn from '../../components/ConditionSignIn';
import Loading from '../../components/Loading';

const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>();

    // Define init value.
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    // Define submit handler.
    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        console.log('🚀 ~ onSubmit ~ values:', values);
    };

    /* try {
      setLoading(true);
      const res = await handleLogin(values);
      if (res.statusCode === 200) {
          if (res?.data?.user?.role === 'USER') {
              router.push('/user/dashboard');
              toast.success('You have successfully Login!');
              setLoading(false);
          } else {
              toast.error('No user found!!!');
              setLoading(false);
          }
      } else {
          setLoading(false);
          toast.error(res?.message);
      }
  } catch (error: any) {
      setLoading(false);
      toast.error(error?.message);
  } */

    // input class
    const inputClass =
        '!py-5 bg-transparent !text-base border border-second-150 !rounded-[8px] placeholder:text-second-150 text-black';

    return (
        <div className='relative'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=''>
                    <div className='mb-2'>
                        <FormInput
                            label='Email*'
                            labelClass='text-black font-semibold pl-1 !text-base'
                            form={form}
                            name='email'
                            placeholder='Enter Your Email'
                            className={inputClass}
                        />
                    </div>
                    <div className='mb-3'>
                        <FormInput
                            label='Password*'
                            type='password'
                            labelClass='text-black font-semibold pl-1 !text-base'
                            form={form}
                            name='password'
                            placeholder='Choose password'
                            className={inputClass}
                        />
                    </div>

                    <div className='mb-4 my-10'>
                        <RoundedBtn
                            type='submit'
                            className='py-3 w-full !flex items-center justify-center gap-3 bg-black rounded-[12px]'
                            disabled={loading ? true : false}
                        >
                            {loading ? <Loading /> : 'Sign In'}
                        </RoundedBtn>
                    </div>
                    <div>
                        <ConditionSignIn pageName='login' />
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
