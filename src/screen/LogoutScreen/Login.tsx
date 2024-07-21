import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';

import LoginForm from '../../components/LoginForm';
import useThemedStyles from '../../hooks/useThemeStyle';


const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<logoutStackPramList, 'login'>>();  
  const styles = useThemedStyles(themedStyles);
  const {colors}=useTheme()
  return (
      <View style={styles.container}>
        <ScrollView>
        <Image
          source={require("../../assets/images/Vector.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <LoginForm />
        <TouchableOpacity>
          <Text style={{
            textAlign:'center',
            marginTop:10, 
            fontWeight: 'bold',
            color:colors.text
          }}
            >Forgot Password?</Text>
        </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity 
        style={styles.reginstrationText}
        onPress={()=>{
          navigation.push('register')
        }}
        >
          <Text style={{
            textAlign:'center',
            marginTop:10,
            color:colors.text
            }}>
            Don't have an account? 
            <Text style={{fontWeight: 'bold',color:colors.text}}>
              Register
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default Login


const themedStyles = (theme:any) => ({
  container:{
    flex:1,
  },
  image: {
    width: '98%',
    marginTop: '7%',
    alignSelf: "center"
  },
  
  reginstrationText: {
    marginBottom: '2%',
  }
});

const style = StyleSheet.create({
  container:{
    flex:1,
  },
  image: {
    width: '98%',
    marginTop: '7%',
    alignSelf: "center"
  },
  
  reginstrationText: {
    marginBottom: '2%',
  }
})

