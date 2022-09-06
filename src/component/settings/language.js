import React from 'react';
import {View, Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {useTranslation} from 'react-i18next';
const Language = () => {
  const {t, i18n} = useTranslation();
  const options = [
    {label: 'English', value: 'en'},
    {label: 'Vietnamese', value: 'vn'},
  ];
  return (
    <View>
      <View style={{flex: 1, backgroundColor: '#fff', height: 100}}>
        <SwitchSelector
          options={options}
          initial={0}
          onPress={e => {
            i18n.changeLanguage(e);
          }}
        />
      </View>
    </View>
  );
};
export default Language;
