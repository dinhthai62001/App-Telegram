import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Images from '../public/image/index';
import Chats from '../component/chats/chats';
import Contact from '../component/contacts/contracts';
import Settings from '../component/settings/settings';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const {t, i18n} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#222222'},
      }}>
      <Tab.Screen
        name={t('contact')}
        component={Contact}
        options={{
          tabBarLabel: t('contracts'),
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? Images.BOTTOM_TAB.CONTACTS_ACTIVITY
                  : Images.BOTTOM_TAB.CONTACTS
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: t('chats'),
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? Images.BOTTOM_TAB.CHATS_ACTIVITY
                  : Images.BOTTOM_TAB.CHATS
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? Images.BOTTOM_TAB.SETTINGS
                  : Images.BOTTOM_TAB.SETTING_ACTIVITY
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
