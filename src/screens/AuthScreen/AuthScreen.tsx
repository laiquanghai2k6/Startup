import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent

} from './../../components/style'
import { Formik } from 'formik'
import mail from './../../../assets/images/mail.png'
import lock from './../../../assets/images/lock.png'
import eye from './../../../assets/images/eye.png'
import eyeClose from './../../../assets/images/eye-close.png'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { SetAuthAction } from '../../slice/setAuth'
import axios from 'axios'
import { REALUSER, SetUserAction } from '../../slice/setUser'
import { selectPost, SetPostAction } from '../../slice/setPost'
import { SetStudyAction } from '../../slice/setStudy'
import * as ImagePicker from 'expo-image-picker'

const ngrok = 'https://5351-2001-ee0-481f-3b0-880c-fc56-1e9c-a0f9.ap.ngrok.io'

const fetch = async () => {
    const dispatch = useAppDispatch()
    var urlPost = ngrok + '/post'
    var urlComment = ngrok + '/post/comment'
    var urlSubject = ngrok + '/subject'
    var urlCourse = ngrok + '/course'
    var urlQuiz = ngrok + '/quiz'
    const urlSort = ngrok + '/sortscore'

    let a = []
    let b = []
    let c = []
    let d = []
    let e = []
    let f = []

    axios.get(urlSort).then((Data) => {
        Data.data.map((data) => {
            f.push(data)
        })
        dispatch(SetUserAction.setsortuser(f))


    }).catch((e) => console.log("error sort"))

    await axios.get(urlPost).then((Data) => {
        Data.data.map((data) => {
            a.push(data)
        })
        console.log(a)
        dispatch(SetPostAction.setpost(a))
    }).catch(e => console.log(4))

    await axios.get(urlComment).then((Data) => {
        Data.data.map((data) => {
            b.push(data)
        })
        dispatch(SetPostAction.setcomment(b))
    }).catch((e) => console.log("error cmt 1"))


    await axios.get(urlSubject).then((Data) => {
        Data.data.map((data) => {
            c.push(data)
        })
        dispatch(SetStudyAction.setStudy(c))

    }).catch(e => console.log('error study'))

    await axios.get(urlCourse).then((Data) => {
        Data.data.map((data) => {
            d.push(data)
        })
        dispatch(SetStudyAction.setCourse(d))

    }).catch(e => console.log(4))

    await axios.get(urlQuiz).then((Data) => {
        Data.data.map((data) => {
            e.push(data)
        })

        dispatch(SetStudyAction.setQuiz(e))

    }).catch(e => console.log(4))

   

}
const { darkLight } = Colors
const AuthScreen = () => {
    const dispatch = useAppDispatch()

    const [hidePassword, setHidePassword] = useState(true)
    const [img, setImg] = useState("")
    const [a, setA] = useState(0)
    const imgs = 'dfe8-8218-456c-8489-2bd937b478e2.jpeg'
     
    // const [image,setImage] = useState("")
    // const [score,setScore] = useState(0)

    // const [name,setName] = useState("")
    // const [phone,setPhone] = useState("")
    // const [school,setSchool] = useState("")
    // const [live,setLive] = useState("")
    // const [subject,setSubject] = useState("")

    let id: string, signIn: boolean, score: number, name: string, phone: string, school: string, live: string, subject: string, image: string
    // const posts = useAppSelector(selectPost)
    // console.log("post.post",posts.post)
    const SignUp = () => {
        // console.log("ss")
        dispatch(SetAuthAction.setsignin(1))
        
        // Alert.alert(
        //     'Sever V??n Ch???n hi???n t???i ??ang m???t ??i???n',
        //     'S??? kh???c ph???c sau 20h 5/12/2022',
        //     [
        //         {
        //             text: 'Ti???p T???c',
        //             onPress: () => { }

        //         },

        //     ]
        // );
    }
    // 

    const post = useAppSelector(selectPost)
    if (a == 0) {


        fetch()
        setA(a + 1)
    }

    const PickImage = async () => {
        const formData = new FormData()
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            //   base64: true
        })
        
        if (!result.cancelled) {
           
            const Name = result.uri.slice(60)
            setImg(result.uri)
            formData.append("testImage", {
                uri:result.uri,
                name:Name,
                fileName:'image',
                type:'image/png'
              
            })
            // formData.append('testImage', result.uri, 'ss');
            // formData.append("testImage",result.uri)
         
            await axios({
                method: "post",
                url: ngrok+"/upload",
                data: formData,
                headers: {
        
                    'Content-Type' : 'multipart/form-data',
                    'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
                    
                }
            })   .then(function (response) {
                console.log("response :", response);
       })
       .catch(function (error) {
                console.log(error);
       })
       
           
         
          
         
}

    }
   

    return (
        <StyledContainer>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.select({
                    ios: 30,
                    android: 20,
                })}
            >
                <InnerContainer>
                    <PageLogo resizeMde="cover" source={require('./../../../assets/images/Neon.png')} />
                    <SubTitle>????ng Nh???p T??i Kho???n</SubTitle>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (values) => {


                            var url = ngrok + '/auth'
                      

                           await axios.get(url)
                                .then((Data) => {
                                    let o = []
                               
                                    Data.data.map((data) => {
                                        if (values.email == data.tai_khoan && values.password == data.mat_khau) {
                                            signIn = true
                                            image = data.image
                                            phone = data.phone
                                            name = data.name
                                            live = data.live
                                            score = data.score
                                            school = data.school
                                            subject = data.subject
                                            id = data.id



                                        }
                                        o.push(data)
                                        // console.log('dataall',data)
                                       
                                    })
                                    // console.log("alluser:",o)
                                    dispatch(SetUserAction.setalluser(o))
                                    
                                    if (signIn) {
                                        const a: REALUSER = {
                                            user: values.email,
                                            image: image,
                                            phone: phone,
                                            name: name,
                                            live: live,
                                            score: score,
                                            school: school,
                                            subject: subject,
                                            id: id
                                        }

                                        dispatch(SetUserAction.setuser(a))

                                        dispatch(SetAuthAction.setsignin(2))

                                    } else {
                                        Alert.alert(
                                            'T??i Kho???n Ho???c M???t Kh???u Kh??ng ????ng',
                                            '',
                                            [
                                                {
                                                    text: 'Ti???p T???c',
                                                    onPress: () => { }

                                                },

                                            ]
                                        );
                                    }
                                }).catch((e) => {
                                    console.log(3)
                                })
                            dispatch(SetAuthAction.setsignin(2))


                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) =>
                        (
                            <StyledFormArea>
                                <MyTextInput
                                    label="T??i Kho???n Email"
                                    img={mail}
                                    placeholder="yortvrluer@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"

                                />
                                <MyTextInput
                                    label="M???t Kh???u"
                                    img={lock}
                                    placeholder="**********"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox></MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>????ng Nh???p</ButtonText>
                                </StyledButton>
                                <Line />

                                <StyledButton signup={true} onPress={SignUp}>
                                    <ButtonText >????ng K??</ButtonText>
                                </StyledButton>
                                {/* <TouchableOpacity
                                    onPress={PickImage}
                                >
                                    <Image
                                        source={{ 
                                        //     uri: 'https://40ed-2001-ee0-481f-3b0-50f7-fd3c-ea65-38c7.ap.ngrok.io/i/'+imgs
                                        //     // 'http://localhost:3000/i'}}
                                          
                                        // 
                                            uri: img == "" ? 'https://th.bing.com/th/id/OIP.QrR56voakzVibJnCtTWw7gHaEK?pid=ImgDet&rs=1' : img }}
                                        style={{ width: 80, height: 80 }}
                                    />
                                </TouchableOpacity> */}

                            </StyledFormArea>

                        )}


                    </Formik>
                </InnerContainer>
            </KeyboardAvoidingView>
        </StyledContainer>
    )
}

const MyTextInput = ({ label, img, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Image
                    source={img}
                    style={{ height: 30, width: 30 }}
                />
            </LeftIcon>
            <StyledInputLabel>

                {label}
            </StyledInputLabel>

            <StyledTextInput
                {...props}

            />

            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Image
                        source={hidePassword ? eye : eyeClose}
                        style={{ height: 30, width: 35 }}
                    />
                </RightIcon>

            )}


        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})