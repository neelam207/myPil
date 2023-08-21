import { createAppContainer  } from  'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { getTabBarIcon } from './tabBarIcons.js'

export default createBottomTabNavigator (
    {
        Tab1 : tab1StackNavigator,
        Tab2 : tab2StackNavigator,
    },
    {
        defaultNavigationOptions : ({ navigation }) => ({
            tabBarIcon : ({ focused, tintColor }) => {
                getTabBarIcon ( navigation, focused, tintColor )
            },
        }),
    },
)

