/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchWithAuth from '@/app/auth/actions/FetchWithAuth';

export const attendeeRegister = async (attendeeData: {
    eventId: string;
    attendeeName: string;
    attendeePhone: string;
}) => {
    try {
        const response = await fetchWithAuth('/attendee-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(attendeeData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to register attendee:', errorData.message);
            throw new Error(errorData.message || 'Failed to register attendee');
        }

        const data = await response.json();
        return data; // Return the registration response if needed
    } catch (error: any) {
        console.error('Error in attendeeRegister:', error.message);
        throw error; // Rethrow the error for higher-level handling
    }
};
