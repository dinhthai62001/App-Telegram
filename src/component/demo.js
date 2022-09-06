import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import * as imagess from '../public/image/index';
const Demo = () => {
  const [addPhoneRShown, setAddPhoneRShown] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          display: addPhoneRShown == false ? 'flex' : 'none',
          width: 100,
          height: 100,
          backgroundColor: '#333',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            setAddPhoneRShown(true);
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={imagess.CHATS.SEARCH}
          />
          <Text style={{marginLeft: 10, marginTop: 2, fontSize: 16}}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: addPhoneRShown == true ? 'flex' : 'none',
          width: 100,
          height: 100,
          backgroundColor: '#333',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            setAddPhoneRShown(false);
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={imagess.CHATS.SEARCH}
          />
          <Text style={{marginLeft: 10, marginTop: 2, fontSize: 16}}>ADD1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Demo;
