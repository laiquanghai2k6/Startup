import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import ResourceListItem from '../../components/ResourceListItem/ResourceListItem'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList, RootStackScreenProps } from '../../type/navigation'
import topics from '../../../assets/data/topics'
import Markdown from 'react-native-markdown-display';
import TopicSection from './TopicSection'
import CustomButton from '../../components/CustomButton'
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround'
import { Auth, DataStore } from 'aws-amplify'
import { Topic, Resource, Exercise, UserTopicProgress } from '../../models'
const TopicScreen = ({ route, navigation }: RootStackScreenProps<'Topic'>) => {

  const [topic, setTopic] = useState<Topic>();
  const [userTopicProgress, setUserTopicProgress] =
    useState<UserTopicProgress>()
  const [resources, setResources] = useState<Resource[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const topicId = route.params.id;


  useEffect(() => {
    DataStore.query(Topic, topicId).then(setTopic)
    
  }, [topicId]);
    // console.log(topic)

  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: topic?.title })
    }
    const fetchTopicDetails = async () => {
      if (!topic) {
        return;
      }
      const resources = await DataStore.query(Resource);
      setResources(resources.filter((r) => r.topicID === topic.id));


      const exercises = await DataStore.query(Exercise)
      setExercises(exercises.filter((r) => r.topicID === topic.id));

      const userData = await Auth.currentAuthenticatedUser()
      const userTopicProgresses = await DataStore.query(UserTopicProgress);
   


      const userProgress = userTopicProgresses.find(
        (tp) => tp.topicId === topic?.id && tp.sub === userData?.attributes.sub

      );
      if (userProgress) {
        setUserTopicProgress(userProgress);
      } else {
        const newUserProgress = await DataStore.save(
          new UserTopicProgress({
            sub: userData?.attributes.sub,
            completedExercisesIDs: [],
            completedResourcesIDs: [],
            progress: 0,
            topicId: topic.id

          }))
      }
    }
    fetchTopicDetails()
  }, [topic])

  useApplyHeaderWorkaround(navigation.setOptions)




  const onStartQuiz = () => {
    if (topic?.topicQuizId) {
      navigation.navigate("Quiz", { id: topic.topicQuizId })
    }
  }

 
 
  const onResourceComplete = async (resource: Resource) =>{
    if(!userTopicProgress){return}
    const updated = await DataStore.save(UserTopicProgress.copyOf(userTopicProgress,(updated)=>{
      if(!updated.completedResourcesIDs.includes(resource.id)){
      updated.completedResourcesIDs.push(resource.id);
       const progress = (userTopicProgress.completedResourcesIDs.length + userTopicProgress.completedExercisesIDs.length + 1)
      / (resources.length + exercises.length )
      updated.progress = progress;
      }
    }));
    setUserTopicProgress(updated)
  }
  const onExerciseComplete = async (exercise: Exercise) =>{
    if(!userTopicProgress){return}
    const updated = await DataStore.save(UserTopicProgress.copyOf(userTopicProgress,(updated)=>{
      if(!updated.completedExercisesIDs.includes(exercise.id)){
      updated.completedExercisesIDs.push(exercise.id);
       const progress = (userTopicProgress.completedResourcesIDs.length + userTopicProgress.completedExercisesIDs.length + 1)
      / (resources.length + exercises.length )
      updated.progress = progress;
      }
    }));
    setUserTopicProgress(updated)
  }

  if(!topic && !userTopicProgress){
    return <ActivityIndicator />
  }


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
            onComplete={onResourceComplete}
            isCompleted={userTopicProgress?.completedResourcesIDs.includes(resource.id)}
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
            onComplete={onExerciseComplete}
            isCompleted={userTopicProgress?.completedExercisesIDs.includes(resource.id)}

          />

        ))}
      </TopicSection>

      {topic?.topicQuizId && (
        <CustomButton text={"Start Quiz"} onPress={onStartQuiz} />
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.light.white,

    padding: 10,
    flexGrow: 1

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