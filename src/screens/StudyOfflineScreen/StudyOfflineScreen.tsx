import { ImageBackground, ScrollView, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../../redux/hook'
import { selectCourse } from '../../slice/AddCourseSlice'
import TopicHeaderOffline from '../TopicScreen/TopicHeaderOffline'
import { SubjectOffline } from '../../../assets/data/subjectOffline'

const StudyOfflineScreen = () => {
  const navigation = useNavigation()
  const Subject = useAppSelector(selectCourse)

  return (
    <ScrollView style={{flex:1}}>
    <ImageBackground source={{uri:'https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg?auto=compress&cs=tinysrgb&w=1600'}}
    // resizeMode='stretch'
    >

         <TopicHeaderOffline

        />
    {SubjectOffline.map((subject,index)=>(
      <TouchableOpacity onPress={()=>{
        navigation.navigate("PracticesOfflineScreen",{id:subject.name})
      }}>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginBottom:20}}>
        <Image 
        source={{uri: subject.icon}}
        style={{height:50,width:50}}
        />
      <Text style={{color:'white',marginLeft:20,fontWeight:'800',fontSize:16}}>{subject.name}</Text>
      </View>
      </TouchableOpacity>
    ))}
    </ImageBackground>
    
    </ScrollView>
  )
}

export default StudyOfflineScreen

const styles = StyleSheet.create({})