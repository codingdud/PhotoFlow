import {DrawerNavigationProp, DrawerScreenProps } from "@react-navigation/drawer";
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type CustomHeaderLeftProps = {
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    navigateTo?: keyof DorwarStackPramList;
    onPress?: () => void;
  };

const CustomHeader=({iconName,navigateTo,onPress}: CustomHeaderLeftProps)=>{
  const {colors}=useTheme() 
    const navigation=useNavigation<DrawerNavigationProp<DorwarStackPramList>>()
    return (
      <View style={{ marginLeft: 10,padding:10 }}>
        <TouchableOpacity onPress={() =>{
          navigateTo?navigation.navigate(navigateTo):
          onPress?onPress():navigation.openDrawer()
          
          }}>
          {iconName?<Icon name={iconName} size={20} color={colors.text} />:
          <Icon name="envelope" size={20} color={colors.text} />}
        </TouchableOpacity>
      </View>
    );
  }
  export default CustomHeader;