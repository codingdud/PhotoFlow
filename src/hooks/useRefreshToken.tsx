import axios from '../api/axios';
import { useStateContext } from './contex'; 
import * as Keychain from 'react-native-keychain';

const useRefreshToken = () => {
    const { authState,setAuthState} = useStateContext();
    const refresh= async () => {
        const data = {
        // Example data you want to send
        refreshToken: authState?.refreshToken,
        };
        try {
        const response = await axios.post('/users/refreshTokenMobile', data,{
            withCredentials: true,
        });
        setAuthState({...authState,
            accessToken:response.data.accessToken,
        });
        await Keychain.setGenericPassword(
            'token', 
            JSON.stringify({
              accessToken: response.data.accessToken, 
              refreshToken:authState.refreshToken
            })
          );
        console.log(response.data.accessToken)
        return response.data.accessToken;
        } catch (error:any) {
           // const errorMessage = JSON.parse(error.response.data.message);
            console.log("refresh token error",error.message);
            Keychain.resetGenericPassword({service: 'token'})
            setAuthState({
                accessToken: null,
                refreshToken: null,
                authenticated: false,
            });
        }
    }
    return refresh
}

export default useRefreshToken;