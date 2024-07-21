import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from "@react-navigation/native";


export const MyTabBar=({ state, descriptors, navigation }:BottomTabBarProps)=>{
    const {colors}=useTheme()
    return (
      <View style={{ flexDirection: 'row',backgroundColor:colors.background }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          
          return options.tabBarIcon&&(
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ 
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
               }}
            >
              {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label.toString()}
              </Text> */}
              {options.tabBarIcon&&options.tabBarIcon({
                    color: isFocused ? '#673ab7' :colors.text, size: 24,
                    focused: false
                })}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  