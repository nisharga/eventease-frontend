'use client';
import { Form } from '@/components/ui/form';
import { eventSchema } from '@/schema/event';
import FormInput from '@/shared/FormInput';
import RoundedBtn from '@/shared/RoundedBtn';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { eventCreate } from '../Actions/CreateEvent';
import toast from 'react-hot-toast';

const AddEvent = () => {
    const form = useForm<z.infer<typeof eventSchema>>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            name: '',
            date: '',
            location: '',
            maxAttendees: '',
            createdBy: '',
            organizerEmail: ''
        }
    });

    async function onSubmit(values: z.infer<typeof eventSchema>) {
        const payload = {
            ...values,
            maxAttendees: Number(values.maxAttendees)
        };
        const res = await eventCreate(payload);
        if (res.statusCode === 200) {
            form.reset();
            toast.success('Event created successfully');
            window.location.reload();
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
                            label='Enter Event Name*'
                            labelClass={labelClass}
                            form={form}
                            name='name'
                            placeholder='Event Name.......'
                            className={inputClass}
                        />
                        <FormInput
                            label='Enter Event Date*'
                            labelClass={labelClass}
                            form={form}
                            name='date'
                            placeholder='DD-MM-YYYY'
                            className={inputClass}
                        />

                        <FormInput
                            label='Location *'
                            labelClass={labelClass}
                            form={form}
                            name='location'
                            placeholder='Enter Location Name.......'
                            className={inputClass}
                        />
                        <FormInput
                            label='MaxAttendees *'
                            labelClass={labelClass}
                            form={form}
                            name='maxAttendees'
                            placeholder='min 5 - max 25'
                            type='number'
                            className={inputClass}
                        />
                        <FormInput
                            label='createdBy *'
                            labelClass={labelClass}
                            form={form}
                            name='createdBy'
                            placeholder='Enter Created By.......'
                            className={inputClass}
                        />
                        <FormInput
                            label='organizerEmail *'
                            labelClass={labelClass}
                            form={form}
                            name='organizerEmail'
                            placeholder='Enter Organizer Email.......'
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

export default AddEvent;
