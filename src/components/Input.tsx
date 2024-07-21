import { StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'
import useThemedStyles from '../hooks/useThemeStyle';
import { useTheme } from '@react-navigation/native';

type InputProps = {
    Icon: () => React.ReactNode,
    value: string;
    onChange: (text: string) => void;
    lable: string;
    secureTextEntry?: boolean;
};

const Input = ({ Icon, value, onChange, lable,...props }: InputProps) => {
    const {colors} = useTheme();
    const styles = useThemedStyles(themedStyles);
    return (
        <View style={styles.LableStyle}>
            <View style={styles.row}>
                <Icon />
                <Text style={styles.text}>
                    {lable}
                </Text>
            </View>
            <TextInput
                style={styles.inputStyle}
                value={value}
                onChangeText={onChange}
                placeholder={lable}
                {...props}
                placeholderTextColor={colors.border}
            />
        </View>
    )
}

export default Input


const themedStyles = (theme:any) => ({
    text:{
        color: theme.colors.text,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    LableStyle: {
        marginTop: '5%',
        alignItems: 'flex-start',
        width: '90%',
        justifyContent: 'space-between',
        gap: 4,
    },
    inputStyle: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        color: theme.colors.text,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: '2%',
        paddingLeft: '3%',
    },
  });
  //reffrence purpose
  const style = StyleSheet.create({
    text:{
        color: "black"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    LableStyle: {
        marginTop: '5%',
        alignItems: 'flex-start',
        width: '90%',
        justifyContent: 'space-between',
        gap: 4,
    },
    inputStyle: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: '2%',
        paddingLeft: '3%',
    },
})