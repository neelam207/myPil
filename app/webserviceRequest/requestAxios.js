 //import axios from "axios"
 //axios.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1';
 //const API_KEY = 'AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM';

 // axios.interceptors.request.use(
//     // config => {
//     //     if(getSTore().loginReducr.authToken)
//     //     config.headers = {
//     // ""}
//     // }
//     //
//    // config.headers['Authorization'] = 'Bearer ' + token
//    //return config
//     res => res,
//     err => {
//         console.log("err===",err)
//       throw new Error(err.response.data.message);
//     }
//   )
// export default request = async (method,url, data) => {
//     console.log("REquest Called", url, axios.defaults.baseURL)
//     // connectivity check... 
//     return axios.request ({
//         method : method,
//         url : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM`,
//         data: data
//     })
// }
import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';
const API_KEY = 'AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM';

export default  request = async (data) => {
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
