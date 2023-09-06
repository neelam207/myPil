import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Button  } from "react-native";
import Home from '../../../module/home/Home'
import Booking from '../../booking/Booking';
import Shipment from '../../shipment/Shipment';
import Finance from '../../finance/Finance';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { signOut } from '../../login/loginReducer';
import { useEffect } from 'react';
const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
  const data = useSelector((state) => state.loginSlice.data)
    useEffect(()=>{
        if (data == null) {
            navigation.replace('Login')
    
          }
    },[data])
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#f5610a",
            tabBarInactiveTintColor: "#555",
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight:'bold'
            },
            headerRight: () => (
            
                <Button
                  onPress={() => dispatch(signOut()) }
                  title="Logout"
                  
                 
                />
              ),
        
          })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Booking" component={Booking} />
            <Tab.Screen name="Shipment" component={Shipment} />
            <Tab.Screen name="Finance" component={Finance} />

        </Tab.Navigator>
    );
}
export default AppTabNavigation;