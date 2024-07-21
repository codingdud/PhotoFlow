import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab1 from '../screen/Tab1';
import { MyTabBar } from '../components/TabBar/MyTab';
import { Text } from 'react-native';
import LeftHeader from '../components/TabBar/LeftHeader';
import RightHeader from '../components/TabBar/RightHeader';
import HomeScreen from '../screen/HomePage';
import ProfileHeader from '../components/TabBar/ProfileHeader';
import ProfileScreen from '../screen/LoginScreen/ProfileTab';
import Profile from '../screen/LoginScreen/Profile';
import SearchScreen from '../screen/LoginScreen/SearchScreen';

const Tab = createBottomTabNavigator<TabStackPramList>();

export default function Tabs() {
  return (
    <Tab.Navigator 
    tabBar={(props) => <MyTabBar {...props} />}
    screenOptions={()=>({
      headerLeft: () => <LeftHeader/>,
      headerRight: () => <RightHeader/>,
    })}
    >
      <Tab.Screen 
      name="tab1" 
      component={HomeScreen} 
      options={{
        headerTitle: '',
        tabBarBadge: 3,
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="tab2" 
      component={SearchScreen} 
      options={{
        headerShown: false,
        headerTitle: '',
        tabBarBadge: 3,
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="tab3" 
      component={ProfileScreen}
        options={{
            headerTitle: '',
            tabBarBadge: 3,
            header: () => <ProfileHeader />,
            tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
            ),
        }}
       />
       <Tab.Screen 
      name="tab4" 
      component={Profile}
        options={{
            headerTitle: '',
            tabBarBadge: 3,
        }}
       />
    </Tab.Navigator>
  );
}