import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../src/features/counter/counter';
import createSagaMiddleware from "@redux-saga/core";
import loginSlice from '../module/login/loginReducer'
const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./root-sagas";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginSlice: loginSlice
  },
  
  middleware: [sagaMiddleware],
});
// Added line
sagaMiddleware.run(rootSaga);

export default store;