import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, View} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CardButton = props => {
  return (
    <View style={{...styles.button, ...props.style}}>{props.children}</View>
  );
};

export default CardButton;
const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#333333',
    borderRadius: 8,
    justifyContent: 'center',
    borderRadius: 15,
  },
});
