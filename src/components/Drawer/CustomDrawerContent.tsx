import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileSection from './ProfileSection';
import RenderDrawerItem from './renderDrawerIem'; 
import useData from '../../assets/data/drawerData'
interface CustomDrawerContentProps extends DrawerContentComponentProps {
    navigation: any;
  }

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = (props) => {
  const { DATA1, DATA2, DATA3, DATA4 } = useData();
  const [active, setActive] = useState<string>('');

  const renderItems = (data: any[]) => {
    return data.map((item, index) => (
      <RenderDrawerItem
        key={index}
        label={item.label}
        iconName={item.iconName}
        colorIndex={item.colorIndex}
        navigation={item.navigation}
        navigateTo={item.navigateTo}
        active={active}
        setActive={setActive}
      />
    ));
  };
  const {colors}=useTheme()
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:colors.card}}>
      <ProfileSection />
      {renderItems(DATA1)}
      <View style={styles.separator} />
      {renderItems(DATA2)}
      <View style={styles.separator} />
      {renderItems(DATA3)}
      <View style={styles.separator} />
      {renderItems(DATA4)}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    separator: {
      marginLeft: 26,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginVertical: 8,
    },
  });
  