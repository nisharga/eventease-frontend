import fetchWithAuth from "@/lib/fetchWithAuth"; 
 
interface IProps{ 
    code: string; 
}

export const handleRefer = async (code: any) => { 
    try {
        const response = await fetchWithAuth(`/referral/data/${code}`, {
            method: 'GET', 
        }); 
      const data = await response.json();   
      return data;
    } catch (error) { 
        return error 
 }};  