import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type CustomHeaderLeftProps = {
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    navigateTo?: keyof TabStackPramList;
    onPress?: () => void;
  };

const CustomHeaderTab=({iconName,navigateTo,onPress}: CustomHeaderLeftProps)=>{
  const {colors}=useTheme() 
    const navigation=useNavigation<BottomTabNavigationProp<TabStackPramList>>()
    return (
      <View style={{ marginLeft: 10,padding:10 }}>
        <TouchableOpacity onPress={() =>{
          navigateTo?navigation.navigate(navigateTo):
          onPress?onPress():null
          
          }}>
          {iconName?<Icon name={iconName} size={20} color={colors.text} />:
          <Icon name="envelope" size={20} color={colors.text} />}
        </TouchableOpacity>
      </View>
    );
  }
  export default CustomHeaderTab;