import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';

const [isModalVisible, setModalVisible] = useState(false);

const Modall = () => {
  return (
    <>
      <Modal
        isVisible={isModalVisible}
        animationType="slide"
        transparent={true}
        hasBackdrop={false}
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
    </>
  );
};
export default Modall;
const style = StyleSheet.create({});
