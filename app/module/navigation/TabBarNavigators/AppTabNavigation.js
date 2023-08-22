import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home/Home';
import Booking from '../../../screens/Booking/Booking';
import Shipment from '../../../screens/Shipment/Shipment';
import Finance from '../../../screens/Finance/Finance';

const Tab = createBottomTabNavigator();

 const AppTabNavigation = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Shipment" component={Shipment}  />
      <Tab.Screen name="Finance" component={Finance}  />
      
    </Tab.Navigator>
  );
}
export default  AppTabNavigation;