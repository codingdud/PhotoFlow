import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

/* type RenderDrawerItemProps = {
  label: string;
  iconName: string;
  colorIndex?: number;
  iconSize?: number;
  navigation: { navigate: (arg0: string) => void };
  navigateTo?: keyof DorwarStackPramList;
}; */

const RenderDrawerItem: React.FC<RenderDrawerItemProps> = ({ label, iconName, colorIndex,iconSize, navigation, navigateTo,active,setActive}) => {
  const colorList = ['#41AEA9', '#687EFF', '#A6FF96', '#27005D', 'orange', 'brown', '#9400FF', 'cyan', 'teal', 'yellow', 'gray', 'black', 'darkblue', 'darkred'];
  return (
    <DrawerItem
      style={active === label ? styles.active : null}
      label={label}
      icon={({ color, size }) => <Icon name={iconName} color={colorIndex!==undefined?colorList[colorIndex]:color} size={iconSize?iconSize:size} />}
      onPress={() =>{ 
        setActive(label);
        if(navigateTo){navigation.navigate(navigateTo)}
      }}
    />
  );
};

export default RenderDrawerItem;

const styles = StyleSheet.create({
  //creae active state style
  active:{
    backgroundColor:'#CECECE8C',
    shadowColor:'black',
    shadowOffset:{width:0,height:2,},
    shadowOpacity:0.5,
    shadowRadius:5,
  }
});
