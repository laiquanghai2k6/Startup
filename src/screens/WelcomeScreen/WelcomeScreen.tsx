import { StyleSheet,StatusBar} from 'react-native'
import React from 'react'
import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../../components/style'


const AuthScreenSignUp = () => {


  return (
    <>
    <StatusBar barStyle={'light-content'}/>
        <InnerContainer>
            <WelcomeImage 
            source={{uri:'https://th.bing.com/th/id/R.9a9c4e4a25d0f4bd321d763d9076cc9f?rik=7UKmRygZpQKF4w&pid=ImgRaw&r=0'}}
            resizeMode="cover"
        
            
            />
        <WelcomeContainer>
         <PageTitle welcome={true}>Chào Mừng Bạn!</PageTitle>
         <SubTitle welcome={true}>Lai Quang Hai</SubTitle>
         <SubTitle welcome={true}>yortvrluer@gmail.com</SubTitle>


                <StyledFormArea>
                <Avatar resizeMde="cover" source={require('./../../../assets/images/Neon.png')} />

               
                <Line />

                <StyledButton signup={true} onPress={()=>{}}>
                    <ButtonText >Đăng Xuất</ButtonText>
                </StyledButton>

                  
                </StyledFormArea>
                
                </WelcomeContainer>            


        </InnerContainer>
        </>
  )
}



export default AuthScreenSignUp

const styles = StyleSheet.create({})