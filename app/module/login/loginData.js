//function createLoginServiceDa

// user entered data .. 
//  config val
// body 
// header 

// returna
import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';
const API_KEY = 'AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM';

export default  loginData = async (data) => {
    console.log("REquest Called")
    // connectivity check... 
    const email= data.userName
    const password= data.password
    return  axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
            "email": email,
             "password" : password
        }
    )
}
