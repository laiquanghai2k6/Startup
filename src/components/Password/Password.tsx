import { StyleSheet, Text, View ,TouchableOpacity, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import CustomBotton from '../CustomButton'
import { useNavigation } from '@react-navigation/native'

interface PasswordProps {
    password:string
    courseName:string
  }


const Password = (props: PasswordProps) => {
    const {password,courseName} = props
    const navigation = useNavigation()
    console.log(password," ",courseName)
    const [textPassword,setTextPassword] = useState("")
    const PasswordHandle = () =>{
        if(textPassword == password){
            navigation.navigate("QuestionScreen", { id: courseName })
        }else{
            Alert.alert(
                'Mật khẩu sai!',
                '',
                [
                    {
                        text: 'Ok',
                        onPress: () => { }
    
                    },
    
                ]
            );
        }
    }
  return (
    <TouchableOpacity
    disabled={true}
    style={styles.container}
    
    >
        <View style={styles.modal}>
            <Text style={{color:'white',fontSize:18}}>Mật khẩu</Text>
            <TextInput 
            value={textPassword}
            onChangeText={(val)=>{setTextPassword(val)}}
            style={{color:'black',backgroundColor:'white',width:220,marginTop:10}}
            />
            <CustomBotton  text='Tiếp tục' type='BLUE' style={{marginTop:20}} onPress={PasswordHandle} />
        </View>

    </TouchableOpacity>
  )
}

export default Password

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        
    },
    modal:{

        marginHorizontal:40,
        height:150,
        
        backgroundColor:'#242526b5',
        borderRadius:10,
        alignItems:'center'

    }
})