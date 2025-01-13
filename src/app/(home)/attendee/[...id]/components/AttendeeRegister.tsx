/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@/components/ui/form';
import FormInput from '@/shared/FormInput';
import RoundedBtn from '@/shared/RoundedBtn';
import React from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { attendeeRegister } from '../actions/attendeeRegister';
import { attendeeSchema } from '@/schema/event';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

const AttendeeRegister = ({ paramsId }: any) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof attendeeSchema>>({
        resolver: zodResolver(attendeeSchema),
        defaultValues: {
            attendeeName: '',
            attendeePhone: ''
        }
    });

    async function onSubmit(values: z.infer<typeof attendeeSchema>) {
        const payload = {
            eventId: paramsId,
            ...values
        };
        const res = await attendeeRegister(payload);
        if (res.statusCode === 200) {
            form.reset();
            toast.success('Register successfully');
            router.push('/attendee');
        } else {
            toast.error(res?.message);
        }
    }
    const inputClass =
        'bg-second-600 !placeholder-second-900 !text-black !rounded-[8px] !py-4 lg:!py-6 !mb-4 !w-full';
    const labelClass = 'text-third-500 font-medium pl-1 text-white';
    return (
        <div>
            <div className='text-white'>
                <h2 className='text-2xl mb-4'>Add Events</h2>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                    <div className='col-span-12'>
                        <FormInput
                            label='Enter Attendee Name*'
                            labelClass={labelClass}
                            form={form}
                            name='attendeeName'
                            placeholder='Event Your Name.......'
                            className={inputClass}
                        />
                        <FormInput
                            label='Attendee Phone *'
                            labelClass={labelClass}
                            form={form}
                            name='attendeePhone'
                            placeholder='Enter Your Phone No.......'
                            className={inputClass}
                        />
                    </div>

                    <RoundedBtn
                        className='!w-full mt-4 !py-4 bg-[#d1d5db] !text-black'
                        type='submit'
                    >
                        {/* {!loading ? <Loading /> : 'Add Event'} */} Add Event
                    </RoundedBtn>
                </form>
            </Form>
        </div>
    );
};

export default AttendeeRegister;
