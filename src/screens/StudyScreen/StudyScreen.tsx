import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Subject } from '../../../assets/data/subject'
import { useNavigation } from '@react-navigation/native'
import TopicHeader from '../TopicScreen/TopicHeader'
import Colors from '../../constants/Colors'
import { SCORE } from '../../../assets/data/score'
import { useAppSelector } from '../../redux/hook'
import { selectScore } from '../../slice/ScoreSlice'

const StudyScreen = () => {
  const navigation = useNavigation()
  

  return (
    <ScrollView style={{flex:1}}>
         <TopicHeader

        />
    {Subject.map((subject,index)=>(
      <TouchableOpacity onPress={()=>{
        navigation.navigate("PracticesScreen",{id:subject.name})
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
    </ScrollView>
  )
}

export default StudyScreen

const styles = StyleSheet.create({})