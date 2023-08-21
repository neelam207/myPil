import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const tab1Stack = createNativeStackNavigator();

export function tab1StackNavigator() {
  return (
    <tab1Stack.Navigator>
      <tab1Stack.Screen name="Tab1Screen1" component={Screen1FromModule} />
      <tab1Stack.Screen name="Tab1Screen2" component={Screen2FromModule} />
    </tab1Stack.Navigator>
  );
}