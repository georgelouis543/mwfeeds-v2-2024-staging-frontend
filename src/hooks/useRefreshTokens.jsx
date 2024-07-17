// import axios from 'axios';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    
    const refresh = async () => {
        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        console.log(response)
            setAuth(prev => {
                JSON.stringify(prev)
                return { 
                    ...prev, 
                    email: response.data.user_email,
                    accessToken: response.data.access_token 
                }
            });
            return response.data.accessToken;
        
    }
    return refresh;
};

export default useRefreshToken;