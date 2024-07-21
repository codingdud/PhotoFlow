import { useState, useCallback, useEffect } from 'react';
import * as Keychain from 'react-native-keychain'; 
import { useStateContext } from '../hooks/contex' 

const useLoadJWT = () => {
  const [status, setStatus] = useState('loading');
  const { authState, setAuthState } = useStateContext();

  const loadJWT = useCallback(async () => {
    try {
      const value = await Keychain.getGenericPassword({service: 'token'});
      if (value) {
        const jwt = JSON.parse(value.password);
        setAuthState({
          accessToken: jwt.accessToken || null,
          refreshToken: jwt.refreshToken || null,
          authenticated: jwt.accessToken !== null,
        });
      } else {
        setAuthState({
          accessToken: null,
          refreshToken: null,
          authenticated: false,
        });
      }
      setStatus('success');
    } catch (error) {
      console.log("Keychain error:", error);
      setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  return {status, authState };
};

export default useLoadJWT;
