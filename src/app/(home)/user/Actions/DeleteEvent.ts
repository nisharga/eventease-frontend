/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchWithAuth from '@/app/auth/actions/FetchWithAuth';

export const eventDelete = async (eventId: string) => {
    try {
        const response = await fetchWithAuth(`/event/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to delete event:', errorData.message);
            throw new Error(errorData.message || 'Failed to delete event');
        }

        const data = await response.json();
        return data; // Return the response data if needed
    } catch (error: any) {
        console.error('Error in eventDelete:', error.message);
        throw error; // Rethrow the error for higher-level handling
    }
};
