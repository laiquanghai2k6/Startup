import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewFeedHeader from '../../components/NewFeedHeader'
import Stories from '../../components/Stories'
import Post from '../../components/Post'
import { POSTS } from '../../../assets/data/post'

import { useSelector } from 'react-redux'
import { AddNewFeed, Comment, selectNewFeed } from './newFeedSlice'
import { useAppSelector } from '../../redux/hook'
import { selectComment } from '../../components/Post/commentSlice'

// const comment: Comment[] = []

//     {POSTS.map((post, index)=>{

//         comment.push(post.comments)

//     })}
//     console.log(comment)
// const posts = useAppSelector(selectComment)
// console.log("ff",posts)

const NewFeedScreen = ({navigation}: any) => {
  // console.log(POSTS)
  // const [posts, setPosts] = useState(POSTS)
    const posts = useAppSelector(selectNewFeed)
    // console.log("Post", posts)
    // const dispatch = useDispatch()
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