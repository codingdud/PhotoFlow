import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { useColorScheme } from "react-native";
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';


const defaultValue={
    authState:{
        accessToken: null,
        refreshToken: null,
        authenticated: null,
    },
    setAuthState:()=>{},
    getAccessToken:()=>{},
    logout:()=>{},
    theme:'light',
    toggleTheme:()=>{}

}
export const Context=createContext<typeTooggle>(defaultValue)

export const useStateContext=()=>{
    const context=useContext(Context)
    if(!context){
        throw new Error('useTogoContext must be used within a TogoContext')
    }
    return context
}
export const ContexProvider:React.FC<PropsWithChildren>=({children})=> {
    const colorScheme = useColorScheme()
    const [theme, setTheme]=useState(colorScheme || 'light')
    const [authState,setAuthState]=useState(
        {
            accessToken: null,
            refreshToken: null,
            authenticated: false,
        }
    )
    const getAccessToken = () => {
        return authState.accessToken;
    };

    const logout=()=>{
        Keychain.resetGenericPassword({service: 'token'})
        setAuthState({
            accessToken: null,
            refreshToken: null,
            authenticated: false,
        })   
    }
    useEffect(() => {
        // Load saved theme from storage
        const getTheme = async () => {
          try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
              setTheme(savedTheme==='dark'? 'dark' : 'light');
            }
          } catch (error) {
            console.log('Error loading theme:', error);
          }
        };
        getTheme();
      }, []);
    useEffect(() => {
        // set theme to system selected theme
        if (colorScheme) {
          setTheme(colorScheme);
        }
      }, [colorScheme]);
    const toggleTheme = (newTheme?: "light" | "dark" ) => {
        if (newTheme !== undefined) {
            setTheme(newTheme);
            AsyncStorage.setItem('theme', newTheme);
        }else{
            setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
            AsyncStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
        }
        
    };
  return (
    <Context.Provider value={{
        authState,
        logout,
        setAuthState,
        getAccessToken,
        theme,
        toggleTheme
        }}>
        {children}
    </Context.Provider>
  )
}
