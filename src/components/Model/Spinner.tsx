import React from 'react';
import {ActivityIndicator, StyleSheet, View, Modal} from 'react-native';

const Spinner = ({visible = false}) => (
  <Modal
    transparent={true}
    animationType="none"
    visible={visible}
    onRequestClose={() => {}}>
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator size={50} color="#007aff" />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'transparent', // Semi-transparent background
    
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spinner;