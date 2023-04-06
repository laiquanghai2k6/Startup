import { StyleSheet, Text, View,Image,ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import { USERS } from '../../../assets/data/userStory'
import Colors from '../../constants/Colors'
import CustomButton from '../../components/CustomButton'
import { useAppSelector } from '../../redux/hook'
import { selectUserName } from '../../slice/setUser'

const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'


const OthersProfileScreen = ({ route, navigation }: RootStackScreenProps<'OthersProfileScreen'> )=> {
    const user = useAppSelector(selectUserName)
    const currentUser = user.allUser.find(user=> user.id == route.params.name)
    // console.log("cr",currentUser)

    const ChatHandler = () =>{
      navigation.navigate("ChannelScreen",{id:route.params.name})
    }
    const PressHandler = () =>{
      navigation.goBack()
    }
    return (
      <ImageBackground source={{uri:'https://images.pexels.com/photos/2291873/pexels-photo-2291873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
      
      style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
        <TouchableOpacity onPress={PressHandler}>
        <Image 
        source={{uri:'https://img.icons8.com/material-sharp/ffffff/left.png'}}
        style={{height:20,width:35}}
        />
        </TouchableOpacity>
      <Text style={{color:'white',fontSize:20,fontWeight:'900',marginLeft:180,right:100}}>Trang cá nhân</Text>
      </View>
      <Image  source={{uri:ngrok+'/i/'+currentUser?.image}} style={styles.avatar} />
      
      <Text style={styles.name}>{currentUser?.tai_khoan}</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'800',fontSize:18,color:'white'}}>Tổng số cúp: {currentUser?.score} </Text>
      <Image 
      source={{uri:'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png'}}
      style={{width:30,height:30}}
      />
     

      </View>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
        <Text style={{color:'white',fontWeight:'700'}}>Tên </Text>
          <Image
            source={{uri:'https://img.icons8.com/nolan/512/employee-card.png'}}
            style={{width:25,height:25}}
          />
          <Text style={{color:'white',fontWeight:'700'}}>:  {currentUser?.name}</Text>
        </View>
        {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
        <Text style={{color:'white',fontWeight:'700'}}>Gmail </Text>
          <Image
            source={{uri:'https://img.icons8.com/nolan/512/gmail.png'}}
            style={{width:25,height:25}}
          />
          <Text style={{color:'white',fontWeight:'700'}}>:  {user?.profile.gmail}</Text>
        </View> */}
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
        <Text style={{color:'white',fontWeight:'700'}}>SĐT </Text>
          <Image
            source={{uri:'https://img.icons8.com/nolan/512/ringer-volume.png'}}
            style={{width:25,height:25}}
          />
          <Text style={{color:'white',fontWeight:'700'}}>:  {currentUser?.phone}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
        <Text style={{color:'white',fontWeight:'700'}}>Nơi ở </Text>
          <Image
            source={{uri:'https://img.icons8.com/nolan/512/place-marker.png'}}
            style={{width:25,height:25}}
          />
          <Text style={{color:'white',fontWeight:'700'}}>:  {currentUser?.live}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
        <Text style={{color:'white',fontWeight:'700'}}>Trường học </Text>
          <Image
            source={{uri:'https://img.icons8.com/nolan/512/school.png'}}
            style={{width:25,height:25}}
          />
          <Text style={{color:'white',fontWeight:'700'}}>:  {currentUser?.school}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:5}}>
        <Text style={{color:'white',fontWeight:'700'}}>Môn học yêu thích </Text>
          <Image
            source={{uri:'https://img.icons8.com/nolan/512/glossary.png'}}
            style={{width:25,height:25}}
          />
          <Text style={{color:'white',fontWeight:'700'}}>:  {currentUser?.subject}</Text>
        </View>
       
      </View>
      {/* <View style={styles.buttonContainer}>
      <CustomButton text="Nhắn tin" type="BLUE" 
      onPress={ChatHandler}/>
      

      </View> */}
   
      

   
      </ImageBackground>
  )
}

export default OthersProfileScreen

const styles = StyleSheet.create({
  buttonContainer:{
    marginTop:'auto',
    alignSelf:'stretch'
  },
  name:{
    fontSize:20,
    margin:10,
    fontWeight:'500',
    color:'white'
  },
  avatar:{
    backgroundColor:Colors.light.background,
    width:150,
    height:150,
    borderRadius:150,
    padding:10,
    margin:10,
  },
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:Colors.light.white,
    padding:10,
  },
})