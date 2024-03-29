import { View, Text, TextInput, Image, Button, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import { validUrl } from 'valid-url'
import { POSTS } from '../../../assets/data/post'
import * as ImagePicker from 'expo-image-picker';
import { USERS } from '../../../assets/data/userStory'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { AddNewFeed, newFeedActions, selectNewFeed } from '../../slice/newFeedSlice'
import MultiSelect from 'react-native-multiple-select';
import Select from '../Select'
import client from '../../server/client'
import axios from 'axios'
import { selectUserName } from '../../slice/setUser'
import { SetUpdatePostAction, UPDATEPOST } from '../../slice/updatePost'
import { useNavigation } from '@react-navigation/native'
const PLACEHOLDER_IMG =

  'https://th.bing.com/th/id/OIP.QrR56voakzVibJnCtTWw7gHaEK?pid=ImgDet&rs=1'

export interface contry {
  name: string
}
const countries = [
  {
    name: 'ss'
  },
  {
    name: 'kk'
  }
]

const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'



const FormikPostUploader = ({ navigation }: any) => {
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("")
  const [base64, setBase64] = useState<string>("")
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUserName)
  const navigations = useNavigation()
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
  const PickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      // base64: true
    })
    if (!result.cancelled) {
      setImage(result.uri)
      const formData = new FormData()

      const Name = result.uri.slice(60)
      formData.append("testImage", {
        uri: result.uri,
        name: Name,
        fileName: 'image',
        type: 'image/png'

      })
      await axios({
        method: "post",
        url: ngrok + "/upload",
        data: formData,
        headers: {

          'Content-Type': 'multipart/form-data',
          'Authorization': 'Basic YnJva2VyOmJyb2tlcl8xMjM='

        }
      }).then(function (response) {
        console.log("response :", response);
      })
        .catch(function (error) {
          console.log(error);
        })

    }
  }

  // const PickImage = ()=>{
  //   ImagePicker.openPicker({
  //     width:300,
  //     height:400,
  //     cropping:true
  //   }).then(image=>{
  //     console.log("selected Image",image)
  //   })
  // }

  const handleSubmit = () => {

    const url = ngrok + '/createPost'
    const s = image.slice(60)
    const dp: UPDATEPOST = {
      created: user.user,
      caption: title,
      likes: 0,
      image: s
    }

    dispatch(SetUpdatePostAction.setupdatepost(dp))
    axios.post(url, {
      created: user.user,
      caption: title,
      likes: 0,
      image: s
    }).then((r) => console.log('uploaded'))
      .catch((e) => console.log(e))
    Alert.alert(
      'Chia sẻ Thành Công',
      '',
      [
        {
          text: 'Tiếp Tục',
          onPress: () => { }

        },

      ]
    );
    navigations.navigate("Root")
  }

  return (
    <>

      <View style={{
        margin: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',


      }}>

        <TouchableOpacity onPress={PickImage} disabled={image != ""}>
          <Image
            source={{ uri: image ? image : PLACEHOLDER_IMG }}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, marginLeft: 12 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.select({
              ios: 30,
              android: 20,
            })}
          >
            <TextInput
              style={{ color: 'white', fontSize: 16 }}
              placeholder='Viết Tiêu Đề...'
              placeholderTextColor='gray'
              multiline={true}
              value={title}

              onChangeText={(val) => setTitle(val)}
            />
          </KeyboardAvoidingView>
        </View>
      </View>

      <View style={{
        borderBottomColor: '#eee',
        borderBottomWidth: 1,

      }}></View>


      <Button

        onPress={handleSubmit}
        title='Chia Sẻ'
        disabled={(title == "") ? true : false}

      />


    </>

  )
}


export default FormikPostUploader
