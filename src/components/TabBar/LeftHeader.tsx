import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const LeftHeader = () => {
  const {colors}=useTheme()
  return (
    <View style={[styles.container]}>
      <Text style={[styles.headerText,{color:colors.text}]}>PhotoFlow</Text>
    </View>
  )
}

export default LeftHeader

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerText: {
    fontFamily: 'Sevillana-Regular',
    fontSize: 24,
    color: 'black',
  },
})
