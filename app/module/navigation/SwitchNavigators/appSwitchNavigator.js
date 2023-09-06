// import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// export default createAppContainer (
//     createSwitchNavigator (
//         {
//             AuthLanding : AuthLandingScreen,
//             App : appTabContainer,
//             Auth : appLoginContainer,
//         },
//         {
//             initialRouteName : 'AuthLoading',
//         }
//     )
// );
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../home/Home'
import LoginScreen from '../../login/LoginScreen';
import AppTabNavigation from '../TabBarNavigators/AppTabNavigation';


const Stack = createNativeStackNavigator();

const Nav=() =>{
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tab" component={AppTabNavigation} options={{headerShown:false}} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;