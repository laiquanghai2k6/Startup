import { View, Text, StyleSheet, Pressable, PressableProps, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

interface CustomButtonProps extends TouchableOpacityProps {
    text: string;
    type?:"PRIMARY" | "SECONDARY" | "TERTIARY" | "BLUE";
}



const CustomBotton = ({ style, text,disabled,type="PRIMARY" ,...otherProps}: CustomButtonProps) => {
    const buttonStyle = styles[`container_${type}`];
    const textStyle = styles[`text_${type}`];
    return (
        <TouchableOpacity 
        style={[styles.container,
            buttonStyle,
            
            style as any,disabled && {backgroundColor:Colors.light.tabIconDefault}]} 
        {...otherProps}
        disabled={disabled}
        
        >
            <Text style={[styles.text,textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.light.primary,
        padding:10,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
     
      
    },


    text: { 
        color: Colors.light.white,
        fontSize:16,
        fontWeight:'500',

    },
    container_BLUE:{
        backgroundColor:Colors.light.blue,

    },
    container_TERTIARY:{

    },
    container_SECONDARY:{
        borderWidth:2,
        borderColor:Colors.light.primary
    },
        container_PRIMARY:{
            backgroundColor:Colors.light.primary,
    },
    text_TERTIARY:{
        color:Colors.light.primary
    },
    text_BLUE:{
        color:'white'
    },
    text_PRIMARY:{
        
    },
    text_SECONDARY:{
        color:Colors.light.secondary
    }

})

export default CustomBotton