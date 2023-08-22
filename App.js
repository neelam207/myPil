import Home from './app/screens/Home/Home';
import { Provider } from "react-redux";
import { store } from "./src/store";
import Nav from './app/module/navigation'
const App = () => {
  return (
    <Provider store={store}>
      {/* <Home />
    
      <AppNavigator>
      </AppNavigator> */}
      <Nav/>
    </Provider>
  );
}
export default  App;
