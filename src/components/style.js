import styled from 'styled-components'
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import { Constants } from 'expo-constants'


export const Colors = {

    primary:'#ffffff',
    secondary:'#E5E7EB',
    tertiary:'#334053',
    darkLight:'#9CA3AF',
    brand:'#6D28D9',
    green:'#10B981',
    black:'#000000',
    red:'#EF4444',
};

const {primary,secondary,tertiary,darkLight,brand,green,red,black} = Colors;

export const StyledContainer = styled.View`

    flex:1;
    background-color:${tertiary}

`;

export const InnerContainer = styled.View`
    width:100%;
    align-items:center

`;

export const PageLogo = styled.Image`
margin-top:10px;
    width:250px;
    height:200px;
`;
export const PageTitle = styled.Text`
    font-size:30px;
    text-align:center;
    font-weight:bold;
    color:${brand};
    padding:10px;
    ${(props)=> props.welcome && `
        margin-bottom:35px;
        color:${green}
    `}
`



export const SubTitle = styled.Text`
    font-size:18px;
    margin-bottom:10px;
    letter-spaceing:1px;
    font-weight:bold;
    color:${primary};
    ${(props)=> props.welcome && `
    margin-bottom:5px;
    font-weight:normal
`}
`;

export const StyledFormArea = styled.View`
    width:80%

`
export const StyledTextInput = styled.TextInput`
    background-color:${secondary};
    padding:15px;
    padding-left:55px;
    padding-right:55px;
    border-radius:5px;
    font-size:16px;
    height:60px;
    margin-vertical:3px;
    margin-bottom:10px;
    color:${tertiary};

`

export const StyledInputLabel = styled.Text`
    color:${primary};
    font-size:13px;
    text-align:left;
`

export const LeftIcon = styled.View`
    left:15px;
    top:38px;
    position:absolute;
    z-index:1;


`

export const RightIcon = styled.TouchableOpacity`
    right:15px;
    top:38px;
    position:absolute;
    z-index:1;

`

export const StyledButton = styled.TouchableOpacity`
    padding:15px;
    background-color:${brand};
    justify-content:center;
    border-radius:5px;
    margin-vertical:5px;
    height:60px;
    align-items:center;
    ${(props)=>props.signup == true && `
    background-color:${green};
    flex-direction:row;
    justify-content:center;  
    
    `}

`

export const ButtonText = styled.Text`
    color:${primary};
    font-size:16px;
   
`


export const MsgBox = styled.Text`
    text-align:center;
    font-size:13px;

`
export const Line = styled.View`
    height:1px;
    width:100%;
    background-color:${darkLight};
    margin-vertical:10px;
`

export const ExtraView = styled.View`
    justify-content:center;
    flex-direction:row;
    align-items:center;
    padding:10px;

`

export const ExtraText = styled.Text`
    justify-content :center;
    align-content:center;
    color:${primary}
    font-size:15px;
`
export const TextLink = styled.TouchableOpacity`

    justify-content:center;
    align-items:center
`
export const TextLinkContent = styled.Text`

color:${green};
font-size:15px
`
export const WelcomeContainer = styled(InnerContainer)`
    padding:25px;
    padding-top:10px;
    justify-content:center;
    background-color:${tertiary}
`
export const Avatar = styled.Image`
    width:100px;
    height:100px;
    margin:auto;
    border-radius:50px;
    border-width:2px;
    border-color:${secondary};
    margin-bottom:10px;
    margin-top:10px;
`
export const WelcomeImage = styled.Image`

    height:50%;
    min-width:100%;
`;













