import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import happyboy from '../../../assets/images/happyboy.png'
import sadboy from '../../../assets/images/sadboy.png'
import Colors from '../../constants/Colors'
import CustomButton from '../../components/CustomButton'
import { Auth } from 'aws-amplify'
import { useUserContext } from '../../contexts/UserContext'
const ProfileScreen = () => {

  const {email} = useUserContext();


  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
      <Image  source={happyboy} resizeMode="contain" style={styles.image} />
      </View>
      <Text style={styles.name}>{email}</Text>
      <View style={styles.buttonContainer}>
      <CustomButton text="Sign out" type="SECONDARY" 
      onPress={()=> Auth.signOut()}/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:Colors.light.white,
    padding:10,
  },
  avatar:{
    backgroundColor:Colors.light.background,
    width:150,
    height:150,
    borderRadius:150,
    padding:10,
    margin:10,
  },

  image:{
    width:'100%',
    
    flex:1
  },
  name:{
    fontSize:20,
    margin:10,
    fontWeight:'500',
  },
  buttonContainer:{
    marginTop:'auto',
    alignSelf:'stretch'
  }

})

export default ProfileScreen