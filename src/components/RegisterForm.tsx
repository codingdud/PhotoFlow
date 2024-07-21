
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import {registerSchema} from '../utility/yepValidationSchema';
import Input from './Input';
import { useRegister } from '../api/apis';
import Spinner from './Model/Spinner';
import CustomButton from './CustomButton';
import { useTheme } from '@react-navigation/native';


const RegisterForm = () => {
    const {colors} = useTheme();
    const Email = () => <Icon name="envelope-o" size={20} color={colors.text}/>;
    const User = () => <Icon name="user-o" size={17} color={colors.text}/>;
    const Phone = () => <Icon name="mobile" size={20} color={colors.text}/>;
    const Lock = () => <Icon name="key" size={20} color={colors.text}/>;
    useEffect(() => {
        if(nextpage=='nextpage'){
            console.log('Registeration Successfull')
        }
    }, [])
    const [registerapi,nextpage] = useRegister();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            email: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });
    return (
        <View style={styles.LgoinStyle}>
            {nextpage=='loading'?<Spinner visible={true}/>:null}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        Icon={Email}
                        value={value}
                        onChange={onChange}
                        lable="email"
                    />
                )}
                name="email"
            />
            {errors.email && <Text style={styles.errorStyle}>
                {errors.email.message}
            </Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        Icon={Phone}
                        value={value}
                        onChange={onChange}
                        lable="phone"
                    />
                )}
                name="phone"
            />
            {errors.phone && <Text style={styles.errorStyle}>
                {errors.phone.message}
            </Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        Icon={User}
                        value={value}
                        onChange={onChange}
                        lable="username"
                    />
                )}
                name="username"
            />
            {errors.username && <Text style={styles.errorStyle}>
                {errors.username.message}
            </Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        Icon={Lock}
                        value={value}
                        onChange={onChange}
                        lable="password"
                        secureTextEntry
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorStyle}>
                {errors.password.message}
            </Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        Icon={Lock}
                        value={value}
                        onChange={onChange}
                        lable="confirmPassword"
                        secureTextEntry
                    />
                )}
                name="confirmPassword"
            />
            
            {errors.confirmPassword && <Text style={styles.errorStyle}>
                {errors.confirmPassword.message}
            </Text>}
            <CustomButton
                onPress={handleSubmit(registerapi)}
                disabled={nextpage=='loading'}
                loading={nextpage=='loading'}
                title="Register"
            />
        </View>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '98%',
        marginTop: '7%',
        alignSelf: "center"
    },
    LgoinStyle: {
        marginTop: '10%',
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        marginTop: '5%',
        backgroundColor: 'black',
        borderRadius: 8,
        paddingHorizontal: '20%',
        padding: '2%',
        justifyContent: "center"
    },
    loading:{
        opacity:0.5
    },
    loginText: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        alignSelf: "center"
    },
    reginstrationText: {
        marginBottom: '2%',
    },
    errorStyle: {
        color: '#ff7f7f',
        textAlign:'left',
        width:'90%',
    }
})
