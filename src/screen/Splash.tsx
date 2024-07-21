// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
//import SplashScreen from 'react-native-splash-screen';

const Splash = () => {
    /* useEffect(() => {
        SplashScreen.hide();
    }, []); */
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Vector.png')} style={styles.logo} />
      <Text style={styles.tagline}>Reach for the Stars</Text>
      <Image source={require('../assets/loading.gif')} style={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loading: {
    width: 150,
    height:150,
  },
});

export default Splash;
