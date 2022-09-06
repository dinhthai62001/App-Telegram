import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, LogBox} from 'react-native';
import Navigation from './src/public/navigation';
LogBox.ignoreAllLogs(true);
const App = () => {
  return <Navigation />;
};
export default App;
