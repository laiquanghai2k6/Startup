import { View, Text,StyleSheet,ScrollView,Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewFeedHeader from '../../components/NewFeedHeader'
import Stories from '../../components/Stories'
import Post from '../../components/Post'
import { POSTS } from '../../../assets/data/post'

import { useSelector } from 'react-redux'
import { AddNewFeed, Comment, selectNewFeed } from '../../slice/newFeedSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { selectUserName } from '../../slice/setUser'
import axios from 'axios'
import { selectPost, SetPostAction } from '../../slice/setPost'
import { selectUpdatePost } from '../../slice/updatePost'
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround'
import { SetStudyAction } from '../../slice/setStudy'

const ngrok = 'https://5351-2001-ee0-481f-3b0-880c-fc56-1e9c-a0f9.ap.ngrok.io'

const NewFeedScreen =  ({navigation}: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const post = useAppSelector(selectPost)
  // console.log("post.post",post.post)
  
  const postUpdate = useAppSelector(selectUpdatePost)
  const dispatch = useAppDispatch()
  useApplyHeaderWorkaround(navigation.setOptions)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(()=>{
      fetch()
      setRefreshing(false)
    },2000)
  }, []);
  const fetch = async () => {
    
    var urlPost = ngrok+'/post'
    var urlComment = ngrok+'/post/comment'
    var urlSubject = ngrok+'/subject'
    let a = []
    let b = []
    let c = []
    await axios.get(urlSubject).then((Data) => {
      Data.data.map((data) => {
        c.push(data)

      })
      dispatch(SetStudyAction.setStudy(c))

    }).catch(e => console.log(4))

    await axios.get(urlPost).then((Data) => {
      Data.data.map((data) => {
        a.push(data)

      })
      dispatch(SetPostAction.setpost(a))

    }).catch(e => console.log(4))


    await axios.get(urlComment).then((Data) => {
      Data.data.map((data) => {
        // console.log("DATA:",data)
        b.push(data)

      })
      dispatch(SetPostAction.setcomment(b))
    }).catch((e) => console.log("error cmt 2"))
  }
  useEffect(()=>{
    setTimeout(function(){
      fetch()
      console.log("FETCHCOMMENT")
  }, 3000);
  
  },[postUpdate])

  return (
    <View style={styles.container}>
      
      
      <NewFeedHeader />
      {/* <View style={{marginHorizontal:200}}></View> */}
      <ScrollView  
      // style={{flexDirection:'column-reverse'}}
       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
       >
      <Stories />
      {/* <Text style={{color:'white',fontSize:26}}>sadfasdfas</Text> */}
      
      
       
       {
        
        post.post.map((data,i)=>
          // console.log("data",data)
        
            (
            <Post post={data} key={i}/>
            // <Text style={{color:'white'}}>32</Text>
            )
        
        )
        
        }

        {/* for(int i =1 ; i<= 3 ;i++){
          
        }
         */}
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