/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../Actions/EventList';
import { Dialog, DialogContent } from '@/components/ui/alert-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import Button from '@/components/core/buttons/Button';

const EventList = () => {
    const [events, setEvents] = useState<any[]>([]); // Adjust type based on your API response

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getAllEvents(); // Fetch data using the provided function
                setEvents(data?.data?.data); // Set the data to state
            } catch (err: any) {
                setError(err.message || 'Failed to load events');
            } finally {
                setLoading(false); // Set loading to false after the API call
            }
        };

        fetchEvents();
    }, []);

    const [isViewOpen, setIsViewOpen] = useState(false);

    return (
        <div className='text-white'>
            <h2 className='text-2xl mb-4'>List Of Events</h2>

            {events?.map(
                ({
                    id,
                    name,
                    date,
                    location,
                    maxAttendees,
                    createdBy
                }: any) => (
                    <div
                        className='w-full p-4  rounded-lg shadow-md flex gap-2 items-center justify-center bg-white mb-4'
                        key={id}
                    >
                        {/* Header */}

                        {/* Event Information */}
                        <div className='font-semibold text-black flex flex-col md:flex-row md:items-center md:gap-4 w-full'>
                            <p className='text-base'>
                                <span className='font-bold pr-2'>
                                    Event Name:
                                </span>{' '}
                                {name}
                            </p>

                            <p className='text-base'>
                                <span className='font-bold pr-2'>
                                    Sit Remain:
                                </span>
                                {maxAttendees}
                            </p>

                            {/* view modal */}
                            <Dialog
                                open={isViewOpen}
                                onOpenChange={setIsViewOpen}
                            >
                                <DialogTrigger asChild>
                                    <button className='border p-2 font-semibold rounded-[6px]'>
                                        View
                                    </button>
                                </DialogTrigger>
                                <DialogContent
                                    className='lg:max-w-[624px] bg-first-300 border-none !rounded-[12px]'
                                    isCustomIcon={true}
                                >
                                    <div className='p-6 text-center text-white text-2xl font-semibold'>
                                        Event Details
                                    </div>
                                    <div className='flex flex-col gap-4 text-white'>
                                        <p className='text-base'>
                                            <span className='font-bold pr-2'>
                                                Event Name:
                                            </span>{' '}
                                            {name}
                                        </p>
                                        <p className='text-base'>
                                            <span className='font-bold pr-2'>
                                                Sit Remain:
                                            </span>
                                            {maxAttendees}
                                        </p>
                                        <p className='text-base'>
                                            <span className='font-bold pr-2'>
                                                Date:
                                            </span>
                                            {date}
                                        </p>{' '}
                                        <p className='text-base'>
                                            <span className='font-bold pr-2'>
                                                Location:
                                            </span>
                                            {location}
                                        </p>{' '}
                                        <p className='text-base'>
                                            <span className='font-bold pr-2'>
                                                Created By::
                                            </span>
                                            {createdBy}
                                        </p>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            {/* modal */}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default EventList;
