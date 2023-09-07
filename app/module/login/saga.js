import { PayloadAction } from "@reduxjs/toolkit";
import axios  from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { UserType, GET_USER_BY_ID } from "./types";
import { signInUser, signInUserSuccessAction, signInUserErrorAction} from "./loginReducer";
import request from "../../webserviceRequest/requestAxios";
import loginData from "./loginData";
const API_KEY = 'AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM';

// Generator function
function* signIn(actions) {
  try {
    console.log("ghsdgshdfgahsdfrr",actions.payload.password,actions.payload.userName)
    
    // You can also export the axios call as a function.
   
    //   const response = yield axios.request ({
    //     method : 'post',
    //     url : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM',
    //     data: {"email": actions.payload.email, "password": actions.payload.password}
    // })
    // const response = yield axios.get (
    //    'https://dummy.restapiexample.com/api/v1/employees' )
   
    const data={
      userName:actions.payload.userName,
      password:actions.payload.password
    }
   // const response = yield request('post',`/accounts:signInWithPassword?key=${API_KEY}`,data)
    const response = yield request(data)
   //const response = yield loginData(data)
    console.log("response===", response)
    yield put(signInUserSuccessAction(response));
  } catch (error) {
    console.log(error)
    yield put(signInUserErrorAction(error));
  }
}

// Generator function
export function* watchsignInUser() {
   
  yield takeLatest(signInUser,signIn);
}