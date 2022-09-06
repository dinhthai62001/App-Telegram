import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ButtonSetting = ({image, text, icon, onPress, ...props}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View
        style={{
          marginLeft: 20,
          borderWidth: 0.4,
          borderBottomColor: '#fff',
          flex: 1,
        }}>
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.icon} source={icon} />
      </View>
    </TouchableOpacity>
  );
};
export default ButtonSetting;
const styles = StyleSheet.create({
  container: {
    height: 45,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
  icon: {
    width: 10,
    height: 10,
  },
});
