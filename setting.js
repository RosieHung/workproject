import * as React from 'react';
import { Text, View } from 'react-native';

import FirstPage from './FirstPage';
import  SettingsScreen  from './setting'

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FirstPage} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
