/* eslint-disable @typescript-eslint/no-explicit-any */
export const emailVerify = async (token: string): Promise<any> => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.json();
};
