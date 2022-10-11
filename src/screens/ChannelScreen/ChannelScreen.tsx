import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TextInput, Keyboard, TouchableWithoutFeedback


} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import { USERS } from '../../../assets/data/userStory'
import { FontAwesome, Ionicons, Entypo, AntDesign } from '@expo/vector-icons'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import {  ChatType, MessengerAction, selectMessenger } from '../../slice/MessengerSlice'
import * as ImagePicker from 'expo-image-picker';
const fake = [
  'lô cc',
  'khỏe cl',
  'https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/306311827_829593391507531_1859507173779294366_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4AtVDsl-yMAAX9eVFrJ&_nc_ht=scontent.fhan4-3.fna&oh=03_AVKlwwZhWKVU4JxPgtrQ6Qo37fGg3oufPLmQVRlVGDme8g&oe=636375E6 ',
  '👍'
]
const ChannelScreen = ({ navigation, route }: RootStackScreenProps<'ChannelScreen'>) => {
  const dispatch = useAppDispatch()


  const selectedUser = USERS.find((user) => user.user === route.params.id)
  const [input, setInput] = useState("")
  const [check, setCheck] = useState(false)
  const [fakeIndex, setFakeIndex] = useState(0)
  const [image1, setImage1] = useState<string>("");
  const [image2, setImage2] = useState<string>("");


  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Image
            source={{ uri: selectedUser?.image }}
            style={styles.image}
          />
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
            {selectedUser?.user.length > 15
              ? selectedUser?.user.slice(0, 14).toLowerCase() + '...'
              : selectedUser?.user.toLowerCase()

            }</Text>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 70 }}>
          <TouchableOpacity>
            <FontAwesome name='video-camera' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='call' size={24} color='white' />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation])

  const sendMessage = async () => {

    Keyboard.dismiss();
    // selectedUser?.chat.mes.push({key:1,message:input})
    const p1: ChatType = {
      num: selectedUser?.chat.num,
      mes: [{
        key: 1,
        message: input,
        type:'mes',

      }]
    }
    dispatch(MessengerAction.addMes(p1))
    setInput("")
    setTimeout(() => {
      const p2: ChatType = {
        num: selectedUser?.chat.num,
        mes: [{
          key: 2,
          message: fake[fakeIndex],
        
        type:'mes',      

        }]
      }
      if(fakeIndex == 2){
        p2.mes[0].type = 'image'
      }
      // selectedUser?.chat.mes.push({key:2,message:fake[fakeIndex]})
      dispatch(MessengerAction.addMes(p2))

      setFakeIndex(fakeIndex + 1)
      if (!check) {
        setCheck(true)
      } else setCheck(false)
      // console.log('bruh')

    }
      , 5000)
  }
  useEffect(() => {
    // ChannelScreen(navigation)
  }, [check])
  const chat = useAppSelector(selectMessenger)
  // const [cameraPhoto,setCameraPhoto] = useState()
  // let options:CameraOptions = {
  //   saveToPhotos:true,
  //   mediaType:'photo'
  // }


  const realChat = chat.find((chats) => chats.num == selectedUser?.chat.num)

  useEffect(() => {
    const acceptPermisstion = async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();     
        if (status !== 'granted') {
          alert('Permission denied')
        }
      }
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();     
        if (status !== 'granted') {
          alert('Permission denied')
        }
      }
    }
    acceptPermisstion()
   
  }, [])
  
  useEffect(()=>{
    if(image1 != ""){

    const p1: ChatType = {
      num: selectedUser?.chat.num,
      mes: [{
        key: 1,
        message: image1,
        type:'image',

      }]
    }

    dispatch(MessengerAction.addMes(p1))
  }
    

  },[image1])
  useEffect(()=>{
    if(image2 != ""){
      const p1: ChatType = {
        num: selectedUser?.chat.num,
        mes: [{
          key: 1,
          message: image2,
          type:'image',

        }]
      }
      dispatch(MessengerAction.addMes(p1))
      console.log("ADDED")
    }


    

  },[image2])
  const PickCamera = async () =>{
  
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect:[45,100],
      
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      quality:1
      
    })
    //console.log("IMAGE: ", result)
    if(!result.cancelled){
      setImage1(result.uri)
    }
  }
const PickImage = async () =>{
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.All,
    allowsEditing:true,
    aspect:[45,100],
    quality:1
  })
  
  if(!result.cancelled){
    console.log(1)
    setImage2(result.uri)
  }
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ExpoStatusBar style="light"/> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
        keyboardVerticalOffset={Platform.select({
          ios: 30,
          android: 20,
        })}
      >
        <TouchableWithoutFeedback>
          <>
          
            <ScrollView>
              {realChat?.mes.map((chat, index) => {
                if (chat.key === 1) {
                  if(chat.type == "image"){
                    return(
                      <View style={styles.receiverImg}>
                        <Image 
                        source={{uri: chat.message == "" ? "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?pid=ImgDet&rs=1" : chat.message }}

                        style={{height:100,width:100}}
                        />
                      </View>
                    )
                  }else{
                    return (
                      <View style={styles.receiver}>

                        <Text>{chat.message}</Text>
                      </View>
                    )
                   
                  }
                } else {
                  if(chat.type == "image"){
                    return(
                      <View style={styles.senderImg}>
                        
                      <Image 
                      source={{uri: chat.message == "" ? "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?pid=ImgDet&rs=1" : chat.message }}

                      style={{height:100,width:100,marginLeft:10}}
                      />
                       <Image
                        style={{
                          position: "absolute",
                          bottom: -15,
                          left: -7,
                          width: 30,
                          height: 30,
                          borderRadius: 15
                        }}
                        source={{ uri: selectedUser?.image }}
                      />
                    </View>
                    )
                  }else {
                  return (
                    <View style={styles.sender}>
                      <Image
                        style={{
                          position: "absolute",
                          bottom: -15,
                          left: -7,
                          width: 30,
                          height: 30,
                          borderRadius: 15
                        }}
                        source={{ uri: selectedUser?.image }}
                      />
                      <Text>{chat.message}</Text>
                    </View>
                  )
                      }
                }

              })}
            </ScrollView>
            <View style={[styles.footer]}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity activeOpacity={0.5}
                  onPress={PickCamera}
                
                >
                  
                  <AntDesign name="camera" size={25} color="#2B68B6" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
                  onPress={PickImage}
                  style={{paddingRight:10,marginLeft:10}}

                >
                  <Entypo name="images" size={25} color="#2B68B6" />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder='Write Something?'
                style={styles.textInput}
                value={input}
                onChangeText={(text) => setInput(text)}
              />
              <TouchableOpacity activeOpacity={0.5}
                onPress={sendMessage}
              >
                <Ionicons name="send" size={24} color="#2B68B6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
export default ChannelScreen
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,

  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'gray',
    borderRadius: 30

  },
  sender: {
    padding: 15,
    backgroundColor: '#2B68E6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 15,
    maxWidth: '80%',
    position: 'relative',

  },
  senderImg: {
    
    // backgroundColor: '#2B68E6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 15,
    
   
    position: 'relative',

  },
  receiver: {
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative'
  },
  receiverImg: {
   
    backgroundColor:'white',
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 20,
   
    position: 'relative'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    right: 20
  },

})