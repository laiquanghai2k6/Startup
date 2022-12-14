import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
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
import { useAppDispatch } from '../../redux/hook'
import { SetAuthAction } from '../../slice/setAuth'
import axios from 'axios'

const ngrok = 'https://5351-2001-ee0-481f-3b0-880c-fc56-1e9c-a0f9.ap.ngrok.io'
const { darkLight } = Colors
const AuthScreenSignUp =   () => {

    const [hidePassword, setHidePassword] = useState(true)
    const dispatch = useAppDispatch()
    var urlGet = ngrok+'/auth'
    var urlData =  ngrok+'/data'
    let a = []
 
      
    return (
        <KeyboardAvoidingView
            // behavior={Platform.OS === "ios" ? "padding" : null}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        // keyboardVerticalOffset={Platform.select({
        //     ios: 30,
        //     android: 150,
        // })}
        >
            <StyledContainer>


                <TouchableWithoutFeedback>
                    <InnerContainer>
                        <PageLogo resizeMde="cover" source={require('./../../../assets/images/Neon.png')} />

                        <Formik
                            initialValues={{ email: '', password: '',confirmPassword:'' }}
                            
                            onSubmit={ async (values) => {
                              
                               await axios.get(urlGet).then((res)=>{
                                    res.data.map((data)=>{
                                      
                                       a.push(data.tai_khoan.toString())
                                        
                                    })
                                   
                                }).catch((e)=>{
                                    console.log(1)
                                })
                                const check = a.includes(values.email)
                            if(!check){
                                if(values.password == values.confirmPassword ){
                                
                                  
                                axios.post(urlData,{
                                    tai_khoan:values.email,
                                    mat_khau:values.password 
                                })
                                    .then((res) => {                                                          
                                            Alert.alert(
                                                '????ng K?? Th??nh C??ng',
                                                '',
                                                [
                                                    {
                                                        text: 'Ti???p T???c',
                                                        onPress: () => { }

                                                    },

                                                ]
                                            );

                                    dispatch(SetAuthAction.setsignin(0))
                                        
                                    }).catch((e) => {
                                        console.log(2)
                                    })
                                }
                                else{
                                    Alert.alert(
                                        'X??c Nh???n M???t Kh???u Kh??ng Kh???p',
                                        '',
                                        [
                                            {
                                                text: 'Ti???p T???c',
                                                onPress: () => { }

                                            },

                                        ]
                                    );
                                }
                            }else{
                                
                                    Alert.alert(
                                        'T??i Kho???n ???? C?? Ng?????i S??? D???ng!',
                                        '',
                                        [
                                            {
                                                text: 'Ti???p T???c',
                                                onPress: () => { }

                                            },

                                        ]
                                    );
                                
                            }
                                a = []
                              }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) =>
                            (
                                <StyledFormArea>

                                    <View style={{ marginBottom: 10 }}>
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
                                        <MyTextInput
                                            label="X??c Nh???n M???t Kh???u"
                                            img={lock}
                                            placeholder="**********"
                                            placeholderTextColor={darkLight}
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            value={values.confirmPassword}
                                            secureTextEntry={hidePassword}
                                            isPassword={true}
                                            hidePassword={hidePassword}
                                            setHidePassword={setHidePassword}
                                        />
                                    </View>

                                    <View style={{ marginTop: 20 }}>
                                        <StyledButton signup={true} onPress={handleSubmit}>
                                            <ButtonText >????ng K??</ButtonText>
                                        </StyledButton>
                                        <Line />

                                        <ExtraView>
                                            <ExtraText>B???n ???? c?? t??i kho???n r???i? </ExtraText>
                                            <TextLink onPress={()=>{dispatch(SetAuthAction.setsignin(0))}}>
                                                <TextLinkContent>????ng Nh???p</TextLinkContent>
                                            </TextLink>
                                        </ExtraView>
                                    </View>

                                </StyledFormArea>

                            )}


                        </Formik>

                    </InnerContainer>
                </TouchableWithoutFeedback>
            </StyledContainer>
        </KeyboardAvoidingView>

    )
}

const MyTextInput = ({ label, img, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (


        <View style={{ position: 'relative', }}>
            <LeftIcon>
                <Image
                    source={img}
                    style={{ height: 30, width: 30 }}
                />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>

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

export default AuthScreenSignUp

const styles = StyleSheet.create({})