import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../root-sagas";

import { combinedReducer } from "./combinedReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combinedReducer, 
    middleware: [sagaMiddleware],
  });

sagaMiddleware.run(rootSaga);

export default store;