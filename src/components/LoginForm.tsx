import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {loginSchema} from '../utility/yepValidationSchema';
import {useLogin} from '../api/apis';
import Input from './Input';
import CustomButton from './CustomButton';
import Spinner from './Model/Spinner';
import { useTheme } from '@react-navigation/native';
const LoginForm = () => {
    const { colors } = useTheme();
    const MyIcon = () => <Icon name="user-o" size={17} color={colors.text}/>;
    const MyIcon1 = () => <Icon name="lock" size={20} color={colors.text}/>;
    const [Loginapi,nextpage]=useLogin()
    const {control,handleSubmit,formState: { errors }, } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            emailPnone: '',
            password: '',
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
                        Icon={MyIcon}
                        value={value}
                        onChange={onChange}
                        lable="Email/Phone"
                    />
                )}
                name="emailPnone"
            />
            
            {errors.emailPnone && <Text style={styles.errorStyle}>
                {errors.emailPnone.message}
            </Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        Icon={MyIcon1}
                        value={value}
                        onChange={onChange}
                        lable="Password"
                        secureTextEntry
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorStyle}>
                {errors.password.message}
            </Text>}
            <CustomButton
                onPress={handleSubmit(Loginapi)}
                disabled={nextpage=='loading'}
                loading={nextpage=='loading'}
                title="Login"
            />
        </View>
    )
}

export default LoginForm

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
    loginText: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        alignSelf: "center"
    },
    reginstrationText: {
        marginBottom: '2%',
    },
    errorStyle: {
        color: 'red',
        textAlign:'left',
        width:'90%',
    }
})
