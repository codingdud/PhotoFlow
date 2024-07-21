import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeaderTab from './CustomHeaderTab'
import { useStateContext } from '../../hooks/contex'

const RightHeader = () => {
    const {toggleTheme}=useStateContext()
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <CustomHeaderTab/>
      <CustomHeaderTab  iconName={"eye"} onPress={toggleTheme} />
    </View>
  )
}

export default RightHeader

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'Sevillana-Regular',
    fontSize: 24,
    color: 'black',
  },
})
