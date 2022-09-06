import React from 'react';

import BottomTab from '../router/bottomTab';
import Language from '../component/settings/language';
import FindPeople from '../component/contacts/findpeople';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{title: 'Chats'}}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{title: 'Language'}}
        />
        <Stack.Screen
          name="FindPeople"
          component={FindPeople}
          options={{title: 'FindPeople'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
