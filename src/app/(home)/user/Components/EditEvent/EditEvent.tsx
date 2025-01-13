/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Form } from '@/components/ui/form';
import { eventSchema } from '@/schema/event';
import FormInput from '@/shared/FormInput';
import RoundedBtn from '@/shared/RoundedBtn';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { Dialog, DialogContent } from '@/components/ui/alert-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import React from 'react';

interface ViewEventProps {
    isViewOpen: boolean;
    setIsViewOpen: (open: boolean) => void;
    name: string;
    maxAttendees: number;
    date: string;
    location: string;
    createdBy: string;
    id: string;
}

const EditEvent: React.FC<ViewEventProps> = ({
    isViewOpen,
    setIsViewOpen,
    name,
    maxAttendees,
    date,
    location,
    createdBy,
    id
}) => {
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
        console.log(payload);
        /* const res = await eventCreate(payload);
        if (res.statusCode === 200) {
            form.reset();
            toast.success('Event created successfully');
            window.location.reload();
        } else {
            toast.error(res?.message);
        } */
    }
    const inputClass =
        'bg-second-600 !placeholder-second-900 !text-black !rounded-[8px] !py-4 lg:!py-6 !mb-4 !w-full';
    const labelClass = 'text-third-500 font-medium pl-1 text-white';

    return (
        <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
            <DialogTrigger asChild>
                <button className='border p-2 font-semibold rounded-[6px]'>
                    Edit
                </button>
            </DialogTrigger>
            <DialogContent
                className='lg:max-w-[624px] bg-first-300 border-none !rounded-[12px]'
                isCustomIcon={true}
            >
                <div className='p-6 text-center text-white text-2xl font-semibold'>
                    Edit Event Details: {id}
                </div>
                <div className=''>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='w-full'
                        >
                            <div className='col-span-12 h-[400px] overflow-y-scroll'>
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
                                className='!w-full mt-4 !py-4'
                                type='submit'
                            >
                                {/* {!loading ? <Loading /> : 'Add Event'} */}{' '}
                                Add Event
                            </RoundedBtn>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EditEvent;
