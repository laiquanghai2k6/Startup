import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewFeedHeader from '../../components/NewFeedHeader'
import Stories from '../../components/Stories'
import Post from '../../components/Post'
import { POSTS } from '../../../assets/data/post'

import { useSelector } from 'react-redux'
import { AddNewFeed, Comment, selectNewFeed } from '../../slice/newFeedSlice'
import { useAppSelector } from '../../redux/hook'



const NewFeedScreen = ({navigation}: any) => {
 
    const posts = useAppSelector(selectNewFeed)
 
    
  return (
    <View style={styles.container}>
      <NewFeedHeader />
      <Stories />
      <ScrollView>
        {posts.map((post,index)=>(
          <Post post={post}  key={index} />
          
        ))}
       
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       
        flex:1
    }

})

export default NewFeedScreen