import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../module/home/Home'
import Booking from '../../booking/Booking';
import Shipment from '../../shipment/Shipment';
import Finance from '../../finance/Finance';

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Booking" component={Booking} />
            <Tab.Screen name="Shipment" component={Shipment} />
            <Tab.Screen name="Finance" component={Finance} />

        </Tab.Navigator>
    );
}
export default AppTabNavigation;