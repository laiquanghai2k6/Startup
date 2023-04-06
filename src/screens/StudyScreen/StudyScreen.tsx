import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity, ImageBackground, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../constants/Colors'
import { SCORE } from '../../../assets/data/score'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { selectScore } from '../../slice/ScoreSlice'
import { selectCourse } from '../../slice/AddCourseSlice'
import TopicHeaderOnline from '../TopicScreen/TopicHeaderOnline'
import axios from 'axios'
import { selectStudy, SetStudyAction } from '../../slice/setStudy'


 

const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'
const StudyScreen = () => {
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false);
  
  const dispatch = useAppDispatch()

    const onRefresh = async () => {
        setRefreshing(true);
       

        console.log("FETCHzz")
        let d = []
        let e = []

        var urlCourse = ngrok+'/course'
        var urlQuiz =   ngrok+'/quiz'



        await axios.get(urlCourse).then((Data) => {
            Data.data.map((data) => {
                d.push(data)

            })
            dispatch(SetStudyAction.setCourse(d))

         


        }).catch(e => {
            
            console.log("DISPATCH COURSE")
        })

        axios.get(urlQuiz).then((Data) => {
            Data.data.map((data) => {
                e.push(data)
                // console.log("DATA:",data)

            })

            dispatch(SetStudyAction.setQuiz(e))

        }).catch(e => console.log(4))

        setRefreshing(false)
    };
    const study = useAppSelector(selectStudy)
   
    
    console.log(study.subject)
  
  return (
   
<View style={{flex:1}}>

      {/* https://images.pexels.com/photos/1907786/pexels-photo-1907786.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-1907786.jpg&fm=jpg&_gl=1*1fhs0qo*_ga*MzY3MDY3OTEuMTY2NjM2Mjc4Nw..*_ga_8JE65Q40S6*MTY2ODIyNTQ0Ny4yLjEuMTY2ODIyNTc2Ni4wLjAuMA.. */}
    <ImageBackground source={{uri:'https://i.ibb.co/frj1LJJ/pexels-ricardo-esquivel-1907786.jpg'}}
    resizeMode='stretch'
    >

         <TopicHeaderOnline

        />
         <ScrollView 
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
    {study.subject.map((subject,index)=>(
      <TouchableOpacity onPress={()=>{
        navigation.navigate("PracticesScreen",{id:subject.subjectId})
      }}>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginBottom:20}}>
        <Image 
        source={{uri: subject.icon}}
        style={{height:50,width:50}}
        />
      <Text style={{color:'white',marginLeft:20,fontWeight:'800',fontSize:16}}>{subject.subjectName}</Text>
      </View>
      </TouchableOpacity>
    ))}
    </ScrollView>

    </ImageBackground>
    
    </View>
  )
}

export default StudyScreen

const styles = StyleSheet.create({})