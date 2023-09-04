import { View } from 'react-native'
import React,{useState} from 'react'
import { NativeBaseProvider, Button} from "native-base";

export default function NativeBaseExample() {
    const [first, setfirst] = useState(1)
    const [second, setsecond] = useState(second)
    console.log(first)
  return (
    <NativeBaseProvider>
     
      <Button onPress={() => setfirst(first+1)}>Click Me</Button>
  
    </NativeBaseProvider>
  );
}