import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

import * as imagee from '../public/image/index';
const SCREEN_WIDTH = Dimensions.get('window').width;
const HederChat = ({
  button,
  placeholder,
  title,
  onSearchs,
  drawing,
  image,
  textInput,
  onChangeText,
  value,
  onPress,
  onPressImage,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onPressImage} style={styles.headerImage}>
          <Image source={image} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerSearch}>
        <TouchableOpacity style={styles.inputsearch}>
          <Image
            style={{color: '#CCCCCC', fontWeight: '100'}}
            source={imagee.CHATS.SEARCH}
          />
          <TextInput
            style={{fontWeight: '400', color: '#CCCCCC'}}
            {...props}
            placeholder={placeholder}
            placeholderTextColor="#CCCCCC"
            onChangeText={onChangeText}
            value={value}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HederChat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    width: '100%',
    height: 110,
    alignItems: 'center',
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
