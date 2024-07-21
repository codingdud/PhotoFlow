import axios from './axios';
import { useStateContext } from '../hooks/contex';
import * as Keychain from 'react-native-keychain';
import { Alert } from 'react-native';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

export const useLogin=():[SubmitHandler<loginformdatatype>, string]=>{
    const {setAuthState}=useStateContext()
    const [nextpage, setNextpage] = useState('login')
    const Loginapi:SubmitHandler<loginformdatatype>=async(formData:any)=>{
        if(formData.emailPnone.includes('@')){
            formData.email=formData.emailPnone;
        }else{
            formData.phone=formData.emailPnone;
        }
        //console.log(formData)
        try {
        setNextpage('loading')
        const response = await axios.post('/users/loginMobile',formData)
        console.log(response.data)
        const {accessToken, refreshToken} = response.data;
        if(accessToken===undefined){
            throw new Error(response.data.message);  
        }
        setAuthState({
            accessToken,
            refreshToken,
            authenticated:true
        })
        await Keychain.setGenericPassword(
            'token', 
            JSON.stringify({accessToken, refreshToken}),
            {service: 'token'}
        );
        setNextpage('nextpage')
        } catch (error: any) {
            setNextpage('error')
            let message="unknown error";
            if(error.response){
                message=error.response.data.message;
            }else if(error.message){
                message=error.message;
            }
            Alert.alert(message);
        }
    }
    return [Loginapi,nextpage]
}

// Registration API

export const useRegister=(): [SubmitHandler<registerformdatatype>, string] =>{
    const [nextpage, setNextpage] = useState('register')
    const registerapi: SubmitHandler<registerformdatatype> = async (formData) => {
        //delete formData.confirmPassword;
        console.log(formData)
        try {
        setNextpage('loading')
        const response = await axios.post('/users/register',formData)
        //console.log(response.data)
        const {message} = response.data;
        console.log("res",message)
        Alert.alert(message);
        setNextpage('loading')
        } catch (error: any) {
            setNextpage('error')
            Alert.alert("Error",error.response.data.message,
                [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    {
                      text: "OK",
                      onPress: () => console.log("OK Pressed")
                    },
                    {
                      text: "Retry",
                      onPress: () => console.log("Retry Pressed")
                    }
                  ],
                  { cancelable: false}
            );
        }
    }
    return [registerapi,nextpage]
}