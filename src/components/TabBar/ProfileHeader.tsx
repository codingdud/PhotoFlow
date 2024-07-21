import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeaderTab from './CustomHeaderTab';

const ProfileHeader = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <View style={{flex:1,flexDirection: 'row',alignItems:'center'}}>
        <Icon name="lock" size={20} color={colors.text} style={styles.icon} />
        <Text style={[styles.username, { color: colors.text }]}>UserName</Text>
        <Icon name="keyboard-arrow-down" size={20} color={colors.text} style={styles.icon} />
      </View>
      <View style={styles.rightIcons}>
        <View style={styles.notificationIcon}>
          <Icon name="notifications" size={20} color={colors.text} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>9</Text>
          </View>
        </View>
        <Icon name="add-box" size={24} color={colors.text} style={styles.icon} />
        <CustomHeaderTab iconName='navicon' navigateTo='tab4'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    marginHorizontal: 5,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    position: 'relative',
    marginRight: 10,
  },
  notificationBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
});

export default ProfileHeader;
