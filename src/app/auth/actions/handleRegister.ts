import fetchWithAuth from "@/lib/fetchWithAuth"; 
 
interface IUser{
    name: string;
    email: string;
    password: string;
    role: string;
    code?: string;
}

export const handleRegister = async (registerData: IUser) => {
    try {
        const response = await fetchWithAuth('/auth/register', {
            method: 'POST',
            body: JSON.stringify(registerData),
          }); 
      const data = await response.json();       
      return data;
    } catch (error) {  
      return error 
    }
};  