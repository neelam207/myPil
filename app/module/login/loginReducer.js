import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username:'',
  password:'',
  data: null,
  isFetching: false,
  error: null
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signInUser: (state,payload) => {
        console.log("HI",payload)
        state.isFetching= true
    },
    signInUserSuccessAction: (state,payload) =>  {
        console.log("response")
        state.isFetching = false,
        state.data= payload
    },
    signInUserErrorAction: (state,payload) =>  {
        state.isFetching = false,
        state.error = payload
    },
    signOut:(state)=>{
        state.data=null
    }
      

  },
});

export const {signInUser,signInUserErrorAction,signInUserSuccessAction,signOut} = loginSlice.actions;
export default loginSlice.reducer;