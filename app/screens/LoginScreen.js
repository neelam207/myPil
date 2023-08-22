import { View, Text ,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { signInUser } from '../webserviceRequest/signInUser'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const [userName, setuserName] = useState('')
  const [password, setpassword] = useState()
  const navigation=useNavigation()
  const signIn = async(userName,password)=>{

   const resp= await signInUser(userName,password)
    if(resp.status==200){
     navigation.replace('Tab')
    
    }
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TextInput 
        style={styles.inputStyle}
        placeholder='Enter username'
        onChangeText={(e)=>setuserName(e)}
        value={userName}
        />
        <TextInput 
        
        style={styles.inputStyle}
        placeholder='Enter password'
        secureTextEntry
        onChangeText={(e)=>setpassword(e)}
        value={password}
        />
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity
       style={styles.buttonStyle}
       onPress={()=>signIn(userName,password)}
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