import { View, Text, ScrollView, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { selectSavePost } from '../../slice/savePostSlice'
import { useAppSelector } from '../../redux/hook'
import Post from '../../components/Post'

import SavePostHeader from '../../components/SavePostHeader'
import { useNavigation } from '@react-navigation/native'

const SavePostScreen = () => {

  const savePosts = useAppSelector(selectSavePost)
  const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
      <SavePostHeader />
      <View style={{paddingBottom:20,flexDirection:'row'}}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }}
                    style={{ width: 30, height: 30, }}
                />

            </TouchableOpacity>
      <Text style={{color:'white',fontSize:20,marginLeft:100}}>Bài Viết Đã Lưu</Text>
      </View>
      <ScrollView>
        {savePosts.map((savePost,index)=>(
          <Post post={savePost}  key={index} />
          
        ))}
       
      </ScrollView>
    </View>
  )
}

export default SavePostScreen