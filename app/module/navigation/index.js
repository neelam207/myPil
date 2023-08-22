import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import LoginScreen from '../../screens/LoginScreen';
import AppTabNavigation from './TabBarNavigators/AppTabNavigation';


const Stack = createNativeStackNavigator();

const Nav=() =>{
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tab" component={AppTabNavigation} options={{headerShown:false}} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;