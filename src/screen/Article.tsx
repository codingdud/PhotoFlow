import {Text, View } from 'react-native'
import React from 'react'
import useThemedStyles from '../hooks/useThemeStyle'

const Artical = () => {
  const styles = useThemedStyles(themedStyles);
  return (
    <View>
      <Text style={styles.text}>Artical</Text>
    </View>
  )
}

export default Artical

const themedStyles = (theme:any) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
    padding: 100,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.text,
  },
});
