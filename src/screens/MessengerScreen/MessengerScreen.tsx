import { View, Text, SafeAreaView, ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import NewFeedHeader from '../../components/NewFeedHeader'
import MessengerHeader from '../../components/MessengerHeader/MessengerHeader'
import MessengerListItem from '../../components/MessengerListItem'
import { USERS } from '../../../assets/data/userStory'


const MessengerScreen = () => {
  const chat = USERS.map((chat,index)=>{
    return chat.chat
})
// console.log(chat)
  return (
    <SafeAreaView  style={styles.container}> 
      <MessengerHeader />
      <ScrollView>
        <MessengerListItem />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})

export default MessengerScreen