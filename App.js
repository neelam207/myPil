
import { Provider } from "react-redux";
import  store  from "./src/store";
import Nav from './app/module/navigation/SwitchNavigators/appSwitchNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  );
}
export default  App;
