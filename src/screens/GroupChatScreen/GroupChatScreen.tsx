import { StyleSheet, Text, View,Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, TextInput, Platform, Keyboard } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { RootStackScreenProps } from '../../type/navigation';
import { AntDesign, Entypo, FontAwesome, Ionicons,MaterialCommunityIcons  } from '@expo/vector-icons';
import { ChatGroupType, ChatType, MessengerAction } from '../../slice/MessengerSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { AddGroupAction,selectGroup } from '../../slice/AddGroupSlice';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'

const GroupChatScreen = ({navigation,route}: RootStackScreenProps<'GroupChatScreen'>) => {
  const CHATSGROUP = useAppSelector(selectGroup)
  const selectedGroup = CHATSGROUP.find((chatGr) => chatGr.groupName === route.params.id)
  // console.log(selectedGroup)
  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()
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
            source={{ uri: selectedGroup?.groupImage }}
            style={styles.image}
          />
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
            {selectedGroup?.groupName.length > 15
              ? selectedGroup?.groupName.slice(0, 14)+ '...'
              : selectedGroup?.groupName

            }</Text>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100 }}>
          <TouchableOpacity>
            <FontAwesome name='video-camera' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='call' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("GroupMemberScreen",{id: selectedGroup.groupName})}>
          <MaterialCommunityIcons name="human-male-male" size={24} color="white" />
          </TouchableOpacity>

        </View>
      )
    });
  }, [navigation])
  const realGroupChat = CHATSGROUP.find((chats)=> chats.chat.num == selectedGroup?.chat.num)

  const sendMessage = () => {
    Keyboard.dismiss();
    const p1: ChatGroupType = {
      num:selectedGroup?.chat.num,
      mes:[{
        key:1,
        message:input,
        imgUser:'',
        type:"mes"
      }]
    }
    dispatch(AddGroupAction.addMesGroup(p1))
    setInput("")  

 // console.log(realGroupChat)
    
  }
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

    const p1: ChatGroupType = {
      num: selectedGroup?.chat.num,
      mes: [{
        key: 1,
        message: image1,
        type:'image',
        imgUser:'',


      }]
    }

    dispatch(AddGroupAction.addMesGroup(p1))

  }
    

  },[image1])
  useEffect(()=>{
    if(image2 != ""){
      const p1: ChatGroupType = {
        num: selectedGroup?.chat.num,
        mes: [{
          key: 1,
          message: image2,
          type:'image',
          imgUser:'',


        }]
      }
      dispatch(AddGroupAction.addMesGroup(p1))

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
            {realGroupChat?.chat.mes.map((chat, index) => {
              if(chat.key === 1 ){
                if(chat.type == "image"){
                  return(
                    <View style={styles.receiverImg}>
                      <Image 
                      source={{uri: chat.message == "" ? "https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?pid=ImgDet&rs=1" : chat.message }}

                      style={{height:100,width:100}}
                      />
                    </View>
                  )
                }
                else {
              return(                                    
                  <View style={styles.receiver}>

                    <Text>{chat.message}</Text>
                  </View>
                ) 
              }
                 }else{   
                  return(
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
                  source={{uri:chat.imgUser}}
                  />
                  <Text>{chat.message}</Text>
                </View>
                )
                 }

           })}
          </ScrollView>
          <View style={styles.footer}>
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

export default GroupChatScreen

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
  receiverImg: {
   
    backgroundColor:'white',
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 20,
   
    position: 'relative'
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
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    right: 20
  },
})