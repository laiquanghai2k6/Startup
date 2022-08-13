import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

interface ProgressBarProps {
    progress:number;
}


const ProgressBar = ({ 
    progress 

}:ProgressBarProps) => {
  return (
    <View style={{backgroundColor:Colors.light.white,height:7}}>
      <View style={{
        backgroundColor:Colors.light.primary,
        width:`${Math.max(5,progress * 100)}%`,
        height:'100%',
        borderBottomRightRadius:10,

      }}></View>
    </View>
  )
}

export default ProgressBar