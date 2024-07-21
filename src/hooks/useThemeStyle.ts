// useThemedStyles.js
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from 'react-native';

const useThemedStyles = (styles: (arg0: any) => any) => {
  const theme = useTheme();
  return StyleSheet.create(
    typeof styles === 'function' ? styles(theme) : styles
  );
};

export default useThemedStyles;