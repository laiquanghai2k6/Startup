import { View, Text } from 'react-native'
import React from 'react'


const TopicNodeRow = ({children}: {children:React.ReactNode}) => {
  return (
    <View style={{flexDirection:'row', width:'100%',
    justifyContent:'center'
    
    }}>
        {children}
    </View>
  )
}

export default TopicNodeRow