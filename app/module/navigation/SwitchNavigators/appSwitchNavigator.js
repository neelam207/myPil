import { createAppContainer, createSwitchNavigator } from 'react-navigation'

export default createAppContainer (
    createSwitchNavigator (
        {
            AuthLanding : AuthLandingScreen,
            App : appTabContainer,
            Auth : appLoginContainer,
        },
        {
            initialRouteName : 'AuthLoading',
        }
    )
);