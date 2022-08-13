import { View, Text, StyleSheet, Pressable, PressableProps } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

interface CustomButtonProps extends PressableProps {
    text: string;

}


const CustomBotton = ({ style, text,disabled ,...otherProps}: CustomButtonProps) => {
    return (
        <Pressable 
        style={[styles.container,style as any,disabled && {backgroundColor:Colors.light.tabIconDefault}]} 
        {...otherProps}
        disabled={disabled}
        
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
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

})

export default CustomBotton