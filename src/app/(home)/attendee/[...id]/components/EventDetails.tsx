/* eslint-disable react-hooks/exhaustive-deps */
'use state';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getSingleEvent } from '../actions/SingleEvent';

const EventDetails = ({ paramsId }: any) => {
    const [events, setEvents] = useState<any>([]); // Adjust type based on your API response
    console.log('🚀 ~ EventDetails ~ events:', events);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getSingleEvent(paramsId); // Fetch data using the provided function
                setEvents(data?.data); // Set the data to state
            } catch (err: any) {
                setError(err.message || 'Failed to load events');
            } finally {
                setLoading(false); // Set loading to false after the API call
            }
        };

        fetchEvents();
    }, []);
    return (
        <div className='mb-6'>
            <h2 className='text-2xl mb-4 text-white'>Event Details</h2>

            {loading && <p>Loading events...</p>}
            {error && <p className='text-red-500'>{error}</p>}

            <div className='flex gap-4 text-white text-lg mb-2'>
                <p className=''>
                    <span className='font-bold pr-2'>Event Name:</span>
                    {events?.name}
                </p>
                <p className=''>
                    <span className='font-bold pr-2'>Event Location:</span>
                    {events?.location}
                </p>{' '}
                <p className=''>
                    <span className='font-bold pr-2'>Date:</span>
                    {events?.date}
                </p>
                <p className=''>
                    <span className='font-bold pr-2'>Seat Remain:</span>
                    {events?.maxAttendees}
                </p>
            </div>
            <div className='flex gap-4 text-white text-lg'>
                <p className=''>
                    <span className='font-bold pr-2'>Organizer:</span>
                    {events?.createdBy}
                </p>{' '}
                <p className=''>
                    <span className='font-bold pr-2'>Organizer Email:</span>
                    {events?.organizerEmail}
                </p>
            </div>
        </div>
    );
};

export default EventDetails;
