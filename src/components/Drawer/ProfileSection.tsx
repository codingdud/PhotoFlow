import {DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const ProfileSection=() => {
  const navigation=useNavigation<DrawerNavigationProp<DorwarStackPramList>>()
  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain' }}
        style={styles.profileImage}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Jonathan Lee</Text>
        <Text style={styles.profileEmail}>heyfromjonathan@gmail.com</Text>
        <TouchableOpacity style={styles.viewProfileButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.viewProfileButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
    profileInfo: {
      flex: 1,
      marginLeft: 10,
      alignItems: 'flex-end',
    },
    profileContainer: {
      backgroundColor: '#6200EE', // Use the desired background color
      paddingVertical: 30,
      paddingHorizontal: 15,
      alignItems:'center',
      flexDirection:'row',
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginBottom: 10,
    },
    profileName: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    profileEmail: {
      color: '#FFFFFF',
      fontSize: 14,
      marginBottom: 10,
    },
    viewProfileButton: {
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 5,
  
    },
    viewProfileButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  