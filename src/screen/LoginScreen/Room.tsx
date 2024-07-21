import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { useStateContext } from '../../hooks/contex'

const Room = () => {
  const {theme,toggleTheme}=useStateContext()
  const { colors } = useTheme();
  return (
    <View style={{backgroundColor:colors.background}}>
      <Text style={{color:colors.text}}>Room :{theme}{colors.background}</Text>
      <Button title="Change Theme" onPress={()=>toggleTheme()} />
    </View>
  )
}

export default Room

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:{}
  }
})