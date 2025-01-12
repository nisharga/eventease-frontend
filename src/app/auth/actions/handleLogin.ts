import Cookies from 'js-cookie';
import fetchWithAuth from './FetchWithAuth';

interface IProps {
    email: string;
    password: string;
}
export const handleLogin = async (loginData: IProps) => {
    try {
        const response = await fetchWithAuth('/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginData)
        });

        const data = await response.json();
        if (response?.status === 200) {
            const { accessToken, refreshToken, user } = data?.data;
            Cookies.set('accessToken', accessToken);
            Cookies.set('refreshToken', refreshToken);
            Cookies.set('role', user?.role);
            Cookies.set('name', user?.name, {
                secure: false,
                sameSite: 'none'
            });
        }
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
    }
};
