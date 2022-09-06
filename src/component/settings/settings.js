import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import * as imagee from '../../public/image/index';
import BodySettings from './bodySettings';
import {ScrollView} from 'react-native-gesture-handler';

import {useTranslation} from 'react-i18next';

const SCREEN_WIDTH = Dimensions.get('window').width;

const settings = ({}) => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            style={{color: '#CCCCCC', fontWeight: '100', width: 30, height: 30}}
            source={imagee.SETTINGS.QR_CODE}
          />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Image
            style={{
              color: '#CCCCCC',
              fontWeight: '100',
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={imagee.SETTINGS.ADD}
          />
        </View>
        <TouchableOpacity style={styles.headerImage}>
          <Text style={{fontSize: 20, color: '#0000FF'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: '500'}}>
          {t('ThaiDinh')}
        </Text>
        <Text style={{fontSize: 15, color: '#fff'}}>+84 36 274 717</Text>
      </View>
      <ScrollView>
        <BodySettings />
      </ScrollView>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  textButton: {
    color: '#0000FF',
    fontSize: 20,
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffff',
  },
  headerImage: {
    marginRight: 20,
  },
  headerSearch: {
    alignItems: 'center',
    height: 35,
    width: SCREEN_WIDTH - 20,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',

    marginTop: 15,
  },
  inputsearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
