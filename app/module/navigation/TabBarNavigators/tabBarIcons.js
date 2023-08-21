export default getTabBarIcon = (navigation, focused, tintColor) => {
    const routeName = navigation.state;
    let tabIconName;
    if (routeName === 'Tab1'){
        tabIconName = focused ? 'tab1ActiveImagePath' : 'tab1InactiveImagePath';

    }
    else if( routeName === 'Tab2'){
        tabIconName = focused ? 'tab2ActiveImagePath' : 'tab2InactiveImagePath';
    }
    return <Iamge source = {tabIconName}/>
}