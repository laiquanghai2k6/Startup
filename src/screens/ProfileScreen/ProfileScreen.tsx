import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import happyboy from '../../../assets/images/happyboy.png'
import sadboy from '../../../assets/images/sadboy.png'
import Colors from '../../constants/Colors'
import CustomButton from '../../components/CustomButton'
import { Auth } from 'aws-amplify'
import { useUserContext } from '../../contexts/UserContext'
import { selectScore } from '../../slice/ScoreSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { USERS } from '../../../assets/data/userStory'
import AuthScreen from '../AuthScreen'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../../navigation'
import useColorScheme from '../../hooks/useColorScheme'
import { SetAuthAction, SetSignIn } from '../../slice/setAuth'
import { selectUserName } from '../../slice/setUser'
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker'

const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'
const ProfileScreen = () => {
  const user = useAppSelector(selectUserName)

  const [name, setName] = useState(user.name)
  const [subject, setSubject] = useState(user.subject)
  const [sdt, setSdt] = useState(user.phone);
  const [live, setLive] = useState(user.live)
  const [school, setSchool] = useState(user.school)
  const [change, setChange] = useState(false)
  const [SDT, SETSDT] = useState(false)
  const dispatch = useAppDispatch()
  const [image,setImage] = useState(user.image)
  const [base64,setBase64] = useState("")
  const signOutHanler = () => {
    dispatch(SetAuthAction.setsignin(0))
  }
  const ImageProfile = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [6, 4],
      quality: 1,
      base64: true
    })
    if (!result.cancelled) {
      
      setImage(result.uri)
     const url =  ngrok+'/updateImageProfile'
       axios.post(url, {     
        image: result.uri.slice(60),
        id:user.id,
      }).then((r) => console.log('uploaded'))
        .catch((e) => console.log(e))

        const formData = new FormData()
        formData.append("testImage", {
          uri: result.uri,
          name: result.uri.slice(60),
          fileName: 'image',
          type: 'image/png'
  
        })
        axios({
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
  return (

    <ImageBackground source={{ uri: 'https://images.pexels.com/photos/2291873/pexels-photo-2291873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}

      style={styles.container}>
      <Text style={{ color: 'white', marginTop: 20, fontSize: 20, fontWeight: '900' }}>Trang cá nhân </Text>
      <TouchableOpacity onPress={ImageProfile}>
      <Image source={{ uri: ngrok+'/i/'+image }}  style={styles.avatar} />
      </TouchableOpacity>

      <Text style={styles.name}>{user.user}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: '800', fontSize: 18, color: 'white' }}>Tổng số cúp: {user.score} </Text>
        <Image
          source={{ uri: 'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png' }}
          style={{ width: 30, height: 30 }} />


      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Tên </Text>
          <Image
            source={{ uri: 'https://img.icons8.com/nolan/512/employee-card.png' }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: 'white', fontWeight: '700' }}>:  </Text>
          {change == true ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.select({
                ios: 30,
                android: 20,
              })}
            >
              <TextInput
                style={{ color: 'white', fontWeight: '700', borderWidth: 0.5, borderColor: 'white' }}
                value={name}
                onChangeText={(val) => setName(val)}

              />
            </KeyboardAvoidingView>

          ) : (
            <Text style={{ color: 'white', fontWeight: '700' }} >{user.name == "" ? name : user.name}</Text>

          )}

        </View>





        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>SĐT </Text>
          <Image
            source={{ uri: 'https://img.icons8.com/nolan/512/ringer-volume.png' }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: 'white', fontWeight: '700' }}>:  </Text>
          {change == true ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.select({
                ios: 30,
                android: 20,
              })}
            >
              <TextInput
                style={{ color: 'white', fontWeight: '700', borderWidth: 0.5, borderColor: 'white' }}
                value={sdt}
                onChangeText={(val) => setSdt(val)}
                keyboardType='number-pad'
              />
            </KeyboardAvoidingView>

          ) : (
            <Text style={{ color: 'white', fontWeight: '700' }}>{user.phone == "" ? sdt : user.phone}</Text>

          )}

        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Nơi ở </Text>
          <Image
            source={{ uri: 'https://img.icons8.com/nolan/512/place-marker.png' }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: 'white', fontWeight: '700' }}>:  </Text>
          {change == true ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.select({
                ios: 30,
                android: 20,
              })}
            >
              <TextInput
                style={{ color: 'white', fontWeight: '700', borderWidth: 0.5, borderColor: 'white' }}
                value={live}
                onChangeText={(val) => setLive(val)}

              />
            </KeyboardAvoidingView>

          ) : (
            <Text style={{ color: 'white', fontWeight: '700' }}>{user.live == "" ? live : user.live}</Text>

          )}

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Trường học </Text>
          <Image
            source={{ uri: 'https://img.icons8.com/nolan/512/school.png' }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: 'white', fontWeight: '700' }}>:  </Text>
          {change == true ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.select({
                ios: 30,
                android: 20,
              })}
            >
              <TextInput
                style={{ color: 'white', fontWeight: '700', borderWidth: 0.5, borderColor: 'white' }}
                value={school}
                onChangeText={(val) => setSchool(val)}
              />
            </KeyboardAvoidingView>

          ) : (
            <Text style={{ color: 'white', fontWeight: '700' }}>{user.school == "" ? school : user.school}</Text>

          )}
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'white', fontWeight: '700', }}>Thích Học </Text>
          <Image
            source={{ uri: 'https://img.icons8.com/nolan/512/glossary.png' }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: 'white', fontWeight: '700' }}>:  </Text>
          {change == true ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.select({
                ios: 30,
                android: 20,
              })}
            >
              <TextInput
                style={{ color: 'white', fontWeight: '700', borderWidth: 0.5, borderColor: 'white' }}
                value={subject}
                onChangeText={(val) => setSubject(val)}
              />
            </KeyboardAvoidingView>

          ) : (
            <Text style={{ color: 'white', fontWeight: '700' }}>{user.subject == "" ? subject : user.subject}</Text>

          )}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton text="Chỉnh Sửa" type="BLUE"
            onPress={() => {
              if (change) {
                const urlUpdate = ngrok+'/updateProfile'
                axios.post(urlUpdate, {
                  name:name,
                  phone:sdt,
                  live:live,
                  school:school,
                  subject:subject,
                  id:user.id

                }).then((res) => {
               

                }).catch(e => {
                 console.log(e)
                })
               
              }
   
              Alert.alert(
                'Chỉnh Sửa Thành Công',
                '',
                [
                  {
                    text: 'Tiếp Tục',
                    onPress: () => { }

                  },

                ]
              );

              setChange(!change)
            }} />

          <CustomButton text="Đăng Xuất" type="BLUE" style={{ paddingHorizontal: 50 }}
            onPress={signOutHanler} />


        </View>
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.light.white,
    padding: 10,
  },
  avatar: {
    backgroundColor: Colors.light.background,
    width: 150,
    height: 150,
    borderRadius: 150,
    padding: 10,
    margin: 10,
  },

  image: {
    width: '100%',

    flex: 1
  },
  name: {
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
    color: 'white'
  },
  buttonContainer: {
    flex: 1,
    marginTop: 60,
    alignSelf: 'stretch'
  }

})

export default ProfileScreen