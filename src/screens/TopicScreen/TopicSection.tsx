import { View, Text,StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'

interface TopicSectionProps {
    title:string;
    display?:boolean;
}


const TopicSection = ({
  title,
  children,
  display = false,

}: PropsWithChildren<TopicSectionProps>) => {
  if(!display){
    return null;
  }
  return (             
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <>{children}</>
    </View>
  )
}

const styles = StyleSheet.create({


  title:{
    fontSize:24,
    fontWeight:'500',
    letterSpacing:1.1,
    marginBottom:10
    
  },
  container:{
    marginBottom:20
  }
})


export default TopicSection