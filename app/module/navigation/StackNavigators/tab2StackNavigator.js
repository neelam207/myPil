import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const tab2Stack = createNativeStackNavigator();

export function tab2StackNavigator() {
  return (
    <tab2Stack.Navigator>
      <tab2Stack.Screen name="Tab2Screen1" component={Screen1FromModule} />
      <tab2Stack.Screen name="Tab2Screen2" component={Screen2FromModule} />
    </tab2Stack.Navigator>
  );
}