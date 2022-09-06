import React, {useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import * as image from '../public/image/index';
import {useNavigation} from '@react-navigation/native';
const ButtonBack = () => {
  const navigation = useNavigation();
  const onBack = useCallback(() => {
    navigation.goBack();
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerBack} onPress={onBack}>
        <Image style={styles.imageBack} source={image.SETTINGS.BACK} />
        <Text style={styles.textBack}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.textPeople}>People Nearby</Text>
    </View>
  );
};
export default ButtonBack;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerBack: {
    flexDirection: 'row',
  },
  imageBack: {
    width: 30,
    height: 30,
  },
  textBack: {
    color: '#0000FF',
    fontSize: 20,
  },
  textPeople: {
    color: '#fff',
    marginLeft: 80,
    fontSize: 20,
    fontWeight: '700',
  },
});
