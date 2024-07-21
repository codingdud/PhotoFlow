import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';

import Feed from '../screen/Feed';
import Article from '../screen/Article';
import About from '../screen/About';
import Profile from '../screen/LoginScreen/Profile';

import CustomHeader from '../components/Drawer/CustomHeader';
import CustomDrawerContent from '../components/Drawer/CustomDrawerContent';
import Room from '../screen/LoginScreen/Room';
import { useStateContext } from '../hooks/contex';
import { useNavigation, useTheme } from '@react-navigation/native';
import Tabs from './TabStk';

const Drawer = createDrawerNavigator<DorwarStackPramList>();

export default function MyDrawer() {
  const {toggleTheme}=useStateContext()
  const {colors}=useTheme()
  const navigation=useNavigation<DrawerNavigationProp<DorwarStackPramList>>()
  return (
    <Drawer.Navigator 
    screenOptions={()=>({
      drawerStyle: {
        backgroundColor:colors.card,
        width: 350,
      },
      drawerPosition: 'left',
      drawerType: 'front',
      headerLeft: () => <CustomHeader iconName={"navicon"} />,
      headerRight: () => (
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <CustomHeader  iconName={"eye"} onPress={toggleTheme} />
          <CustomHeader  iconName={"cog"} navigateTo='Home' />
        </View>
      ),
    })}
    drawerContent={(props)=><CustomDrawerContent {...props} />}>
      <Drawer.Screen 
      name="Home" 
      component={About} 
      options={() => ({
        headerRight: () => (
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <CustomHeader  iconName={"eye"} onPress={toggleTheme} />
            <CustomHeader  iconName={"user-o"} navigateTo='Profile'/>
            <CustomHeader  iconName={"cog"} onPress={()=>navigation.navigate('Profile')} />
          </View>
        ),
      })}
      />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Transaction" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Room" component={Room} />
      <Drawer.Screen name="Village" component={Tabs} />
    </Drawer.Navigator>
  );
}

//const styles = StyleSheet.create({});
