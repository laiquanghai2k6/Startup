import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native'
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


const fetch = async () => {
    const dispatch = useAppDispatch()
    var urlPost = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/post'
    var urlComment = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/post/comment'
    var urlSubject = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/subject'
    var urlCourse = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/course'
    var urlQuiz = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/quiz'
    let a = []
    let b = []
    let c = []
    let d = []
    let e = []
    await axios.get(urlPost).then((Data) => {
        Data.data.map((data) => {
            a.push(data)
        })
        dispatch(SetPostAction.setpost(a))
    }).catch(e => console.log(4))

    await axios.get(urlComment).then((Data) => {
        Data.data.map((data) => {
            console.log('auth cmt data')
            b.push(data)
        })
        dispatch(SetPostAction.setcomment(b))
    }).catch((e) => console.log("error cmt 1"))

   
    await axios.get(urlSubject).then((Data) => {
        Data.data.map((data) => {
            c.push(data)
        })
        dispatch(SetStudyAction.setStudy(c))

    }).catch(e => console.log(4))

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
    const [a, setA] = useState(0)
    // const [image,setImage] = useState("")
    // const [score,setScore] = useState(0)

    // const [name,setName] = useState("")
    // const [phone,setPhone] = useState("")
    // const [school,setSchool] = useState("")
    // const [live,setLive] = useState("")
    // const [subject,setSubject] = useState("")

    let id: string, signIn: boolean, score: number, name: string, phone: string, school: string, live: string, subject: string, image: string

    const SignUp = () => {
        console.log("ss")
        dispatch(SetAuthAction.setsignin(1))

    }
    // 

    const post = useAppSelector(selectPost)
    if (a == 0) {


        fetch()
        setA(a + 1)
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
                    <SubTitle>Đăng Nhập Tài Khoản</SubTitle>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            // console.log(values)
                            // dispatch(SetAuthAction.setsignin(2))

                            var url = 'https://2248-2001-ee0-4818-c90-89bd-1cda-528b-8b79.ap.ngrok.io/auth'
                        
                            axios.get(url)
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
                                        
                                        // console.log(data.mat_khau)
                                    })
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
                                            'Tài Khoản Hoặc Mật Khẩu Không Đúng',
                                            '',
                                            [
                                                {
                                                    text: 'Tiếp Tục',
                                                    onPress: () => { }

                                                },

                                            ]
                                        );
                                    }
                                }).catch((e) => {
                                    console.log(3)
                                })

                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) =>
                        (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email Address"
                                    img={mail}
                                    placeholder="yortvrluer@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"

                                />
                                <MyTextInput
                                    label="Password"
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
                                    <ButtonText>Đăng Nhập</ButtonText>
                                </StyledButton>
                                <Line />

                                <StyledButton signup={true} onPress={SignUp}>
                                    <ButtonText >Đăng Ký</ButtonText>
                                </StyledButton>

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