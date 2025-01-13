/* eslint-disable @typescript-eslint/no-explicit-any */
import fetchWithAuth from '@/app/auth/actions/FetchWithAuth';

export const getSingleEvent = async (id: string) => {
    try {
        const response = await fetchWithAuth(`/event/${id}`, {
            method: 'GET'
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to fetch recipients:', errorData.message);
            throw new Error(errorData.message || 'Failed to fetch recipients');
        }
        const data = await response.json();
        return data; // Optionally return the response data if needed
    } catch (error: any) {
        console.error('Error in getAllRecipients:', error.message);
        throw error; // Rethrow the error for higher-level handling
    }
};
