
import { Provider } from "react-redux";
import { store } from "./src/store";
import Nav from './app/module/navigation/SwitchNavigators/appSwitchNavigator'
import NativeBaseExample from './src/screens/NativeBaseExample';
const App = () => {
  return (
    <Provider store={store}>
      {/*    
      <AppNavigator>
      </AppNavigator>
      
     <NativeBaseExample />
      */}
      <Nav/>
    
    </Provider>
  );
}
export default  App;
