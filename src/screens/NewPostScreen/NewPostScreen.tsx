import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../../components/AddNewPost'

const NewPostScreen = ({navigation}: any) => {
  return (
   <SafeAreaView style={{backgroundColor:'black',flex:1}}>
        <AddNewPost navigation={navigation}/>
   </SafeAreaView>
  )
}

export default NewPostScreen