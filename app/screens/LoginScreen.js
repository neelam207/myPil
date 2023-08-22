import { View, Text ,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TextInput 
        style={styles.inputStyle}
        placeholder='Enter username'/>
        <TextInput 
        
        style={styles.inputStyle}
        placeholder='Enter password'
        secureTextEntry
        />
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity
       style={styles.buttonStyle}
       >
            <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
       style={styles.buttonStyle}
       >
            <Text style={{color:'white'}}>Forget Password</Text>
        </TouchableOpacity>
        
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
   buttonStyle:{
    backgroundColor:'blue',
    margin:10,
    padding:10,
    borderRadius:12
   } ,
   inputStyle:{
    width:200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    margin:5,
    padding:10
   }
})