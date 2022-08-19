import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect ,useState} from 'react'
import Colors from '../../constants/Colors'
import ResourceListItem from '../../components/ResourceListItem/ResourceListItem'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList, RootStackScreenProps } from '../../type/navigation'
import topics from '../../../assets/data/topics'
import Markdown from 'react-native-markdown-display';
import TopicSection from './TopicSection'
import CustomButton from '../../components/CustomButton'
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround'
import { DataStore } from 'aws-amplify'
import {Topic,Resource,Exercise} from '../../models'
const TopicScreen = ({ route, navigation }: RootStackScreenProps<'Topic'>) => {

  const[topic,setTopic] = useState<Topic>();
  const[resources,setResources] = useState<Resource[]>([]);
  const[exercises,setExercises] = useState<Exercise[]>([]);

  const topicId = route.params.id;


  useEffect(()=>{
    DataStore.query(Topic,topicId).then(setTopic)
  },[topicId]);

  useEffect(()=>{
    if (topic) {
      navigation.setOptions({ title: topic?.title })
    }
    DataStore.query(Resource)
    .then(resources => resources.filter((r)=> r.topicID === topic?.id))
    .then(setResources)

    DataStore.query(Exercise)
    .then(exercises => exercises.filter((r)=> r.topicID === topic?.id))
    .then(setExercises)
  },[topic])

  useApplyHeaderWorkaround(navigation.setOptions)
 
 


  const onStartQuiz = () =>{
    navigation.navigate("Quiz", {id:"123"})
  }
  console.log(topic)
 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopicSection title='Intro' display={!!topic?.description}>
        <Markdown>
          {topic?.description}
        </Markdown>
      </TopicSection>
      
        <TopicSection title='Resources' display={!!resources.length}>
          
          {resources.map((resource, index) => (
            <ResourceListItem
              key={resource.id}
              resource={resource}
              index={index}
              isLast={index + 1 === resources.length}
            />

          ))}
        </TopicSection>
     

   
      <TopicSection title='Practice' display={!!exercises.length}>

        {exercises.map((resource, index) => (
          <ResourceListItem
            key={resource.id}
            resource={resource}
            index={index}
            isLast={index + 1 === exercises.length}
          />

        ))}
      </TopicSection>
      <CustomButton text={"Start Quiz"} onPress={onStartQuiz} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.light.white,
  
    padding: 10,
    flexGrow:1

  },
  title: {

    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1.1,
    marginTop: 25,
    marginBottom: 10
  },

})

export default TopicScreen;