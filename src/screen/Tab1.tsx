import { Button, StyleSheet, Text, View } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import React from 'react'
import CustomButton from '../components/CustomButton';

const Tab1 = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const handlePressd = () => {
    width.value = withSpring(width.value - 50);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  )
}

export default Tab1

const styles = StyleSheet.create({})