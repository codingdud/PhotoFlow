import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import useThemedStyles from '../hooks/useThemeStyle';

// Define the props the component will accept
interface CustomButtonProps {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({loading, title,...props}) => {
  const styles = useThemedStyles(themedStyles);
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, loading ? styles.loading : null]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
// Define or import your styles here
const themedStyles = (theme:any) => ({
  button: {
    marginTop: '5%',
    backgroundColor: theme.colors.text,
    borderRadius: 8,
    paddingHorizontal: '20%',
    padding: '1%',
    justifyContent: "center"
  },
  text: {
    color: theme.colors.background,
    fontSize: 24,
    alignSelf: "center"
  },
  loading:{
    opacity:0.5
  },
})
const style = StyleSheet.create({
  button: {
    marginTop: '5%',
    backgroundColor: 'black',
    borderRadius: 8,
    paddingHorizontal: '20%',
    padding: '2%',
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  loading:{
    opacity:0.5
  },
});
