const API_KEY = 'AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM';
import request from './requestAxios'
import {createAsyncThunk} from '@reduxjs/toolkit'
//axios.AxiosHeaders = {'a'}
export async function signInUser(email, password) {
 // 
  try {
    const response = await request("post",  `/accounts:signInWithPassword?key=${API_KEY}`,{
      email: email,
      password: password,
    })
    console.log('response', response.data);
    alert('Sign In Successfully');
   return response;
    
  } catch (error) {
    alert(error.message);
  }
}
