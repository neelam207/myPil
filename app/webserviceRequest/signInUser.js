import axios from 'axios';
const API_KEY = 'AIzaSyBDgIx7grCb9_RPIkjXOtcX4TVxgQOPZcM';

export async function signInUser(email, password) {
 // 
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        email: email,
        password: password,
      },
    );

    //console.log('response', response);
    alert('Sign In Successfully');
   return response;
    
  } catch (error) {
    alert('Incorrect Id password');
  }
}
