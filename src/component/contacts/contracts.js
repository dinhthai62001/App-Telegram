import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Button,
  SectionList,
} from 'react-native';
import HeaderChat from '../../part_component/hederChat';
import * as image from '../../public/image/index';
import {DATA_PHONE, DATA_SDT} from './data';
import Modal from 'react-native-modal';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
const Contact = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

  const [search, setSearch] = useState('');
  const [sorts, setSorts] = useState(null);
  const [data, setData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalAdd, setModalAdd] = useState(false);
  const [inPutLastName, setinPutLastName] = useState('');
  const [inPutFistName, setinPutFistName] = useState('');
  const [sdt_kc, setSdtKC] = useState(DATA_SDT);
  const [numberOfInputs, setNumberOfInputs] = useState([1]);

  const dataSorts = useMemo(() => {
    const data1 = [...data];
    console.log(sorts);
    if (sorts === 0)
      return data1.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
      });
    if (sorts === 1)
      return data1.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
      });
  }, [sorts]);

  useEffect(() => {
    if (search) {
      const dataTemp = DATA_PHONE.filter((item, index) => {
        return item.name.includes(search);
      });
      setData(dataTemp);
      return;
    }
    setData(DATA_PHONE);
  }, [sorts, search, DATA_PHONE]);

  useEffect(() => {
    if (sorts !== null) {
      setData(dataSorts);
    }
  }, [sorts, dataSorts]);

  const sortInput = () => {
    setSorts(0);
    setModalVisible(!isModalVisible);
  };
  const sortInput1 = () => {
    setSorts(1);
    setModalVisible(!isModalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalAdd = () => {
    setModalAdd(!isModalAdd);
  };

  const onFindPeople = useCallback(() => {
    navigation.navigate('FindPeople');
  }, [navigation]);

  const addInputData = () => {
    let dataaa = [...data];
    setModalAdd(!isModalAdd);
    dataaa.push({
      id: dataaa.length + 1,
      name: inPutLastName + ' ' + inPutFistName,
      image: 'tttt',
      time: Date(),
    });
    setData(dataaa);
  };

  const deleteItem = ({item, index}) => {
    let array = [...data];
    array.splice(index, 1);

    setData(array);
  };
  // const cleanItem = ({item, index}) => {
  //   setData([]);
  // };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.containerItem}>
        <Image style={styles.imageItem} source={item.image} />
        <View style={styles.inputItem}>
          <Text style={styles.textItem}>{item.name}</Text>
          <Text style={styles.textTimeItem}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const addInput = () => {
    setNumberOfInputs([...numberOfInputs, 1]);
  };
  const onRemove = ({item, index}) => {
    let array = [...numberOfInputs];
    array.splice(index, 1);
    setNumberOfInputs(array);
  };

  const renderItemSDT = ({item, index}) => {
    return (
      <View style={styles.containerSDT}>
        <TouchableOpacity
          onPress={() => {
            onRemove(item);
          }}>
          <Image style={styles.imageRemove} source={image.SETTINGS.REMOVE} />
        </TouchableOpacity>
        <Text style={styles.testRemove}>di động</Text>
        <TextInput
          style={styles.inputRemove}
          placeholder="+"
          placeholderTextColor="#fff"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        animationType="slide"
        transparent={true}
        hasBackdrop={false}
        animationIn="slideInRight"
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: 200,
              height: 70,
              marginTop: 30,
              backgroundColor: '#ffff',
              justifyContent: 'center',
              backgroundColor: '#222',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={sortInput}
              style={{
                height: 35,
                borderBottomWidth: 0.5,
                borderBottomColor: '#fff',

                justifyContent: 'center',
              }}>
              <Text style={{marginLeft: 10, fontSize: 15, color: '#fff'}}>
                by Last Seen
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 35,
                borderBottomWidth: 0.5,

                justifyContent: 'center',
              }}
              onPress={sortInput1}>
              <Text style={{marginLeft: 10, fontSize: 15, color: '#fff'}}>
                by Name
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={isModalAdd}
        animationType="fade"
        hasBackdrop={false}
        deviceWidth={1}
        style={{marginTop: 20}}
        onRequestClose={() => {
          setModalAdd(false);
        }}>
        <View style={{flex: 1, backgroundColor: '#000000'}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={toggleModalAdd}>
              <Text style={{fontSize: 15, color: '#0000FF', fontWeight: '400'}}>
                Cancle
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  fontWeight: '700',
                }}>
                New Contact
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => addInputData()}
              style={{marginRight: 20}}>
              <Text style={{fontSize: 15, color: '#fff'}}>Create</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft: 30, marginTop: 40}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 80, height: 80, borderRadius: 40}}
                source={image.SETTINGS.ADD}
              />
              <View style={{marginLeft: 10, flex: 1}}>
                <View
                  style={{borderWidth: 0.5, borderBottomColor: '#ffffffff'}}>
                  <TextInput
                    placeholder="First Name"
                    style={{color: '#ffff'}}
                    placeholderTextColor="#fff"
                    onChangeText={text => setinPutLastName(text)}
                    value={inPutLastName}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Last Name"
                    style={{color: '#ffff'}}
                    placeholderTextColor="#fff"
                    onChangeText={text => setinPutFistName(text)}
                    value={inPutFistName}
                  />
                </View>
              </View>
            </View>
            <View>
              <FlatList
                data={numberOfInputs}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItemSDT}
              />
              <TouchableOpacity style={styles.containerAdd} onPress={addInput}>
                <Image
                  style={styles.imageADD}
                  source={image.SETTINGS.ADD_PHONE}
                />
                <Text style={styles.testADD}>add phone</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <HeaderChat
        button={t('sort')}
        title={t('contracts')}
        placeholder={t('search')}
        image={image.CONTRACTS.PLUS_24}
        // onPressImage={sortInput1}
        onChangeText={text => {
          setSorts(null);
          setSearch(text);
        }}
        value={search}
        onPress={toggleModal}
        onPressImage={toggleModalAdd}
      />

      <View style={styles.containerFlatlist}>
        <TouchableOpacity style={styles.findpeople} onPress={onFindPeople}>
          <Image source={image.CONTRACTS.LOCATION} />
          <Text style={styles.textfind}>{t('findpeople')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findpeople}>
          <Image source={image.CONTRACTS.ADD_MADE} />
          <Text style={styles.textfind}>{t('inviteFriends')}</Text>
        </TouchableOpacity>

        <SwipeListView
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          renderHiddenItem={item => (
            <TouchableOpacity
              onPress={() => {
                deleteItem(item);
              }}
              style={{
                width: 50,
                height: 70,
                backgroundColor: '#FF0000',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={image.CONTRACTS.DELETE}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
          leftOpenValue={75}
        />
      </View>
    </View>
  );
};
export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  findpeople: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textfind: {
    color: '#0000FF',
    fontSize: 15,
    marginLeft: 25,
  },
  containerFlatlist: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  containerItem: {
    height: 75,
    backgroundColor: '#000',

    paddingVertical: 10,
    flexDirection: 'row',
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  inputItem: {
    flex: 1,
    borderWidth: 1,
    borderBottomColor: '#ffffffff',
    marginLeft: 20,
  },
  textItem: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: '500',
  },
  textTimeItem: {
    fontSize: 13,
    color: '#ffff',
    fontWeight: '400',
  },
  containerSDT: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderBottomColor: '#fff',
    borderLeftWidth: 1,
  },
  imageRemove: {
    width: 30,
    height: 30,
  },
  testRemove: {
    fontSize: 15,
    color: '#0000FF',
    marginLeft: 5,
  },
  inputRemove: {
    fontSize: 15,
    marginLeft: 5,
  },
  containerAdd: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderBottomColor: '#fff',
  },
  imageADD: {
    width: 30,
    height: 30,
  },
  testADD: {
    fontSize: 15,
    color: '#0000FF',
    marginLeft: 5,
  },
});
