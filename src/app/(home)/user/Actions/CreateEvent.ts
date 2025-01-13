/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchWithAuth from '@/app/auth/actions/FetchWithAuth';

export const eventCreate = async (eventData: {
    name: string;
    date: string;
    location: string;
    maxAttendees: number;
    createdBy: string;
    organizerEmail: string;
}) => {
    try {
        const response = await fetchWithAuth('/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to create event:', errorData.message);
            throw new Error(errorData.message || 'Failed to create event');
        }

        const data = await response.json();
        return data; // Return the created event data if needed
    } catch (error: any) {
        console.error('Error in eventCreate:', error.message);
        throw error; // Rethrow the error for higher-level handling
    }
};
