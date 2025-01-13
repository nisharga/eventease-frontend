'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../Actions/EventList';
import { Dialog, DialogContent } from '@/components/ui/alert-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import RoundedBtn from '@/shared/RoundedBtn';
import toast from 'react-hot-toast';
import { eventDelete } from '../Actions/DeleteEvent';
import io from 'socket.io-client';

const socket = io('http://localhost:5000/');

const EventList = () => {
    const [events, setEvents] = useState<any[]>([]); // Adjust type based on your API response
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [activeEventId, setActiveEventId] = useState<string | null>(null); // Track the active dialog

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

    const handleDelete = async (id: string) => {
        const res = await eventDelete(id);
        if (res.statusCode === 200) {
            toast.success('Event Delete successfully');
            window.location.reload();
        } else {
            toast.error(res?.message);
        }
    };

    const [attendees, setAttendees] = useState<any[]>([]);
    const [eventMessage, setEventMessage] = useState('');

    useEffect(() => {
        // Listen for new attendee registration
        socket.on('new-attendee-request', (data) => {
            setAttendees((prev) => [...prev, data]); // Update the attendees list

            // Show a toast notification for the new attendee
            toast.success(`New Attendee: ${data.attendee.attendeeName} added!`);
        });

        // Listen for event full notification
        socket.on('event-full', (data) => {
            setEventMessage(data.message); // Show notification message

            // Show a toast warning for event full
            toast.error(data.message);
        });

        // Cleanup the socket connection
        return () => {
            socket.off('new-attendee');
            socket.off('event-full');
        };
    }, []);

    return (
        <div className='text-white'>
            <h2 className='text-2xl mb-4'>Real-time Updates</h2>
            <ul>
                {attendees?.map((attendee, index) => (
                    <li key={index}>
                        Event: ({attendee?.eventName}) - New Attendee Name: (
                        {attendee?.attendee.attendeeName}) - Phone: (
                        {attendee?.attendee.attendeePhone})
                    </li>
                ))}
            </ul>

            {eventMessage && <p style={{ color: 'red' }}>{eventMessage}</p>}

            <hr className='py-4 mt-6' />

            <h2 className='text-2xl mb-4'>Latest Events</h2>

            {loading && <p>Loading events...</p>}
            {error && <p className='text-red-500'>{error}</p>}

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
                        className='w-full p-4 rounded-lg shadow-md flex gap-2 items-center justify-center bg-white mb-4'
                        key={id}
                    >
                        <div className='font-semibold text-black flex flex-col md:flex-row md:items-center md:gap-4 w-full justify-between'>
                            <div className='flex gap-4'>
                                <p className='text-base'>
                                    <span className='font-bold pr-2'>
                                        Event Name:
                                    </span>
                                    {name}
                                </p>
                                <p className='text-base'>
                                    <span className='font-bold pr-2'>
                                        Sit Remain:
                                    </span>
                                    {maxAttendees}
                                </p>
                            </div>

                            <div className='flex gap-4'>
                                {/* View Modal */}
                                <Dialog
                                    open={activeEventId === id} // Open the dialog if this event is active
                                    onOpenChange={(isOpen) =>
                                        setActiveEventId(isOpen ? id : null)
                                    }
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
                                                </span>{' '}
                                                {maxAttendees}
                                            </p>
                                            <p className='text-base'>
                                                <span className='font-bold pr-2'>
                                                    Date:
                                                </span>{' '}
                                                {date}
                                            </p>
                                            <p className='text-base'>
                                                <span className='font-bold pr-2'>
                                                    Location:
                                                </span>{' '}
                                                {location}
                                            </p>
                                            <p className='text-base'>
                                                <span className='font-bold pr-2'>
                                                    Created By:
                                                </span>{' '}
                                                {createdBy}
                                            </p>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                {/* Delete Modal */}
                                <Dialog
                                    open={activeEventId === id} // Open the dialog if this event is active
                                    onOpenChange={(isOpen) =>
                                        setActiveEventId(isOpen ? id : null)
                                    }
                                >
                                    <DialogTrigger asChild>
                                        <button className='border p-2 font-semibold rounded-[6px]'>
                                            Delete
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent
                                        className='lg:max-w-[624px] bg-first-300 border-none !rounded-[12px]'
                                        isCustomIcon={true}
                                    >
                                        <div className='p-6 text-center text-white text-2xl font-semibold'>
                                            Are You Sure To Delete This Event
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
                                                </span>{' '}
                                                {maxAttendees}
                                            </p>
                                            <p className='text-base'>
                                                <span className='font-bold pr-2'>
                                                    Date:
                                                </span>{' '}
                                                {date}
                                            </p>
                                            <p className='text-base'>
                                                <span className='font-bold pr-2'>
                                                    Location:
                                                </span>{' '}
                                                {location}
                                            </p>
                                            <p className='text-base'>
                                                <span className='font-bold pr-2'>
                                                    Created By:
                                                </span>{' '}
                                                {createdBy}
                                            </p>
                                            <RoundedBtn
                                                className='!bg-red-500 !text-white py-2'
                                                onClick={() => handleDelete(id)}
                                            >
                                                Delete
                                            </RoundedBtn>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default EventList;
