
import { Provider } from "react-redux";
import  store  from "./app/store/store";
import Nav from './app/module/navigation/SwitchNavigators/appSwitchNavigator';
import ActivityIndicatorComponent from "./app/common/CustomActivityIndicator";
import CheckConnectivity from "./app/common/NetworkConnectivity";

const App = () => {
  return (
    <Provider store={store}>
      <Nav/>
      <ActivityIndicatorComponent/>
      <CheckConnectivity/>
    </Provider>
  );
}
export default  App;
