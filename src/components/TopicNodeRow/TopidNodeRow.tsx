import { View, Text } from 'react-native'
import React from 'react'


const TopidNodeRow:React.FC = ({children}) => {
  return (
    <View style={{flexDirection:'row', width:'100%',
    justifyContent:'center'
    
    }}>
        {children}
    </View>
  )
}

export default TopidNodeRow