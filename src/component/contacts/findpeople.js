import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ButtonBack from '../../part_component/buttonBack';
import * as image from '../../public/image/index';
const FindPeople = () => {
  return (
    <View style={styles.container}>
      <ButtonBack />
      <View style={styles.containerCompass}>
        <Image style={styles.imageCompass} source={image.SETTINGS.COMPASS} />
        <Text style={styles.textCompass}>
          Exchange contact info with people nearby
        </Text>
        <Text style={styles.textCompass}>and find new friends</Text>
      </View>
    </View>
  );
};
export default FindPeople;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerCompass: {
    alignItems: 'center',
    marginTop: 30,
  },
  imageCompass: {
    width: 150,
    height: 150,
  },
  textCompass: {
    fontSize: 13,
    color: '#fff',
  },
});
