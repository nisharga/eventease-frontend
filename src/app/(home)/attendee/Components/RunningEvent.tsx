/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllEvents } from '../../user/Actions/EventList';

const RunningEvent = () => {
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

    return (
        <div className='text-white'>
            <h2 className='text-2xl mb-4'>List Of Events Running</h2>

            {loading && <p>Loading events...</p>}
            {error && <p className='text-red-500'>{error}</p>}

            {events?.map(({ id, name, date, location, maxAttendees }: any) => (
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
                                <span className='font-bold pr-2'>Date:</span>
                                {date}
                            </p>{' '}
                            <p className='text-base'>
                                <span className='font-bold pr-2'>
                                    Location:
                                </span>
                                {location}
                            </p>{' '}
                            <p className='text-base'>
                                <span className='font-bold pr-2'>Sit:</span>
                                {maxAttendees}
                            </p>
                        </div>

                        <div className='flex gap-4'>
                            {/* View Modal */}
                            <Link
                                href={`attendee/${id}`}
                                className='border p-2 rounded'
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RunningEvent;
