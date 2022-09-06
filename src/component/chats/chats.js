import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import HederChat from '../../part_component/hederChat';
import * as image from '../../public/image/index';
import styles from './styles';
import {DATA_ITEM} from './data';
import {useTranslation} from 'react-i18next';
const Chats = () => {
  const [search, setSearch] = useState('');
  const {t, i18n} = useTranslation();
  const data = useMemo(() => {
    if (search) {
      return DATA_ITEM.filter((item, index) => {
        return item.name.includes(search);
      });
    }
    return DATA_ITEM;
  }, [search]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.containerItem}>
        <Image style={styles.imageItem} source={item.image} />
        <View style={styles.inputItem}>
          {item.isGroup ? (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textItem}>
                  {item.name}{' '}
                  {item.isMuted ? (
                    <Image
                      style={{width: 20, height: 20}}
                      source={image.CHATS.MUTE}
                    />
                  ) : null}{' '}
                </Text>
                <View style={{flex: 1}}>
                  <Text style={styles.textTimeItem}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.containeruserJoined}>
                {item.userJoined ? (
                  <View>
                    <Text style={styles.textuserJoined}>
                      {item.newUserName} {t('joinTheGroup')}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          ) : (
            <>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textItem}>
                  {item.name}{' '}
                  {item.isMuted ? (
                    <Image
                      style={{width: 20, height: 20}}
                      source={image.CHATS.MUTE}
                    />
                  ) : null}{' '}
                </Text>
                <View style={{flex: 1}}>
                  <Text style={styles.textTimeItem}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.containerMessage}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.textmessage}>
                  {item.message}
                </Text>
                {item.numberMessage > 0 ? (
                  <Text style={styles.numberMessage}>
                    {item.numberMessage}{' '}
                  </Text>
                ) : null}
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>

      // <TouchableOpacity style={styles.containerItem}>
      //   <Image style={styles.imageItem} source={item.image} />
      //   <View style={styles.inputItem}>
      //     <View>
      //       <Text style={styles.textItem}>{item.name}</Text>
      //     </View>
      //     <View style={{flex: 1}}>
      //       <Text style={styles.textTimeItem}>{item.time}</Text>
      //     </View>
      //   </View>
      // </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <HederChat
        button={t('edit')}
        title={t('chats')}
        placeholder={t('searchforMessages')}
        image={image.CHATS.EDIT_FILE}
        onChangeText={text => {
          setSearch(text);
        }}
        value={search}
      />

      <View style={styles.containerFlatlist}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
export default Chats;
