import React, { useEffect, useState } from 'react'
//import { signInUser } from '../../webserviceRequest/signInUser'
import { useNavigation } from '@react-navigation/native'
import { NativeBaseProvider, Box, Stack, Input, Button, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { signInUser, signInUserSuccessAction, signInUserErrorAction } from "./loginReducer";
export default function LoginScreen() {
  const [userName, setuserName] = useState('')
  const [password, setpassword] = useState()
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const data = useSelector((state) => state.loginSlice.data)
  useEffect(
    ()=>{
       if (data != null) {
        navigation.replace('Tab')

      }
    }
    ,[data])
  // if (data != null)
  //   // alert("DATA"+ JSON.stringify(data))
    const signIn = (userName, password) => {
      const myResp = dispatch(signInUser({ userName, password }))
   //const resp = await signInUser(userName, password)
      console.log("sneha----------", myResp)
     
    }
  return (

    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Stack space={4} w="75%" maxW="300px" mx="auto">
          <Input size="md" placeholder="Enter username"
            onChangeText={(e) => setuserName(e)}
            value={userName}
          />
          <Input size="md" placeholder="Enter password"
            onChangeText={(e) => setpassword(e)}
            value={password}
          />

        </Stack>


        <Stack space={4} paddingTop={5} alignItems="center"
          direction="row"
        >
          <Button
            // spinnerPlacement="end" isLoadingText="Submitting"
            onPress={() => signIn(userName, password)}
          >Log in</Button>

          <Button>New Customer</Button>
        </Stack>;
      </Box>
    </NativeBaseProvider>
  );
}
