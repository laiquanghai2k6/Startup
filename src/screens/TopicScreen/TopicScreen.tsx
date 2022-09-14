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
import { Analytics, Auth, DataStore } from 'aws-amplify'
import { Topic, Resource, Exercise, UserTopicProgress } from '../../models'
import { useModuleContext } from '../../contexts/ModuleContext'
import { LinearGradient } from 'expo-linear-gradient';
import TopicHeader from './TopicHeader'
const TopicScreen = ({ route, navigation }: RootStackScreenProps<'Topic'>) => {

  const { updateTopicProgress } = useModuleContext()
  const [topic, setTopic] = useState<Topic>();
  const [userTopicProgress, setUserTopicProgress] =
    useState<UserTopicProgress>()
  const [resources, setResources] = useState<Resource[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [completedExercisesIDs, setCompletedExercisesIDs] = useState<string[]>([]);
  const [completedResourcesIDs, setCompletedResourcesIDs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const topicId = route.params.id;
  useEffect(() => {
    if (topicId) {
      Analytics.record({
        name: 'topicOpened',
        attributes: { id: topicId }
      })
    }
  }, [topicId])
  useEffect(() => {
    setLoading(true)
    DataStore.query(Topic, topicId).then(setTopic)
  }, [topicId]);
  // console.log(topic)
  useEffect(() => {  
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
        setCompletedExercisesIDs(userProgress.completedExercisesIDs);
        setCompletedResourcesIDs(userProgress.completedResourcesIDs)
      } else {
        const newUserProgress = await DataStore.save(
          new UserTopicProgress({
            sub: userData?.attributes.sub,
            completedExercisesIDs: [],
            completedResourcesIDs: [],
            progress: 0,
            topicId: topic.id
          }))
        setUserTopicProgress(newUserProgress)
      }
      setLoading(false)
    }
    fetchTopicDetails()
  }, [topic])

  // useEffect(()=>{
  //   if(!userTopicProgress){
  //     return;
  //   }
  //   const sub = DataStore.observeQuery(UserTopicProgress,(c)=>
  //     c.id("eq",userTopicProgress.id)
  //   ).subscribe(({items}) =>{
  //     console.log("update")
  //     console.log(items)
  //     setUserTopicProgress(items[0]);
  //     updateTopicProgress(topicId,items[0])
  //   });
  //   return () => {
  //     sub.unsubscribe();
  //   }

  // },[userTopicProgress?.id]);



  useApplyHeaderWorkaround(navigation.setOptions)




  const onStartQuiz = () => {
    if (topic?.topicQuizId) {
      navigation.navigate("Quiz", { id: topic.topicQuizId })
    }
  }



  const onResourceComplete = async (resource: Resource) => {
    if (
      loading ||
      !userTopicProgress ||
      completedResourcesIDs.includes(resource.id)) {
      return
    }
    // setLoading(true)

    // const updated = await DataStore.save(UserTopicProgress.copyOf(userTopicProgress,(updated)=>{
    //   updated.completedResourcesIDs = ids;

    //   updated.progress = getNextProgress();

    // }));
    setCompletedResourcesIDs((existing) =>
      existing.includes(resource.id) ? existing : [...existing, resource.id]
    )
    // setUserTopicProgress(updated)
    // updateTopicProgress(topicId,updated)

    // setLoading(false)

  }
  useEffect(() => {
    if (!userTopicProgress ||
      completedResourcesIDs.length ===
      userTopicProgress?.completedResourcesIDs.length

    ) {
      return
    }
    (async () => {
      setLoading(true);
      const updated = await DataStore.save(UserTopicProgress.copyOf(userTopicProgress, (updated) => {
        updated.completedResourcesIDs = completedResourcesIDs;

        updated.progress = getNextProgress();

      })
      );

      setUserTopicProgress(updated)
      updateTopicProgress(topicId, updated)
      setLoading(false);

    })()
  }, [completedResourcesIDs])

  const onExerciseComplete = async (exercise: Exercise) => {
    if (
      loading ||
      !userTopicProgress ||
      completedExercisesIDs.includes(exercise.id)) {
      // console.log("Loading... ")

      return
    }
    // console.log("Updating Ex: ",exercise.id)
    setLoading(true)
    const ids = [
      ...completedExercisesIDs,
      exercise.id
    ];
    const updated = await DataStore.save(UserTopicProgress.copyOf(userTopicProgress, (updated) => {


      updated.completedExercisesIDs = ids
      updated.progress = getNextProgress()

    }));
    setCompletedExercisesIDs(ids)
    setUserTopicProgress(updated);
    updateTopicProgress(topicId, updated)

    setLoading(false)

  }

  const getNextProgress = () => {
    return (completedResourcesIDs.length + completedExercisesIDs.length + 1)
      / (resources.length + exercises.length)

  }

  if (!topic && !userTopicProgress) {
    return <ActivityIndicator />
  }


  
  return (
    <ScrollView contentContainerStyle={styles.container}>

        <TopicHeader
        title={topic?.title || ""}
        id={topic?.id || ""}
        />
      <View style={styles.contentContainer}>
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
              isCompleted={completedResourcesIDs.includes(resource.id)}
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
              isCompleted={completedExercisesIDs.includes(resource.id)}

            />

          ))}
        </TopicSection>

        {topic?.topicQuizId && (
          <CustomButton text={"Start Quiz"} onPress={onStartQuiz} />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.light.white,

    flexGrow: 1

  },
  titles: {

    fontSize:30,
    fontWeight:'500',
    letterSpacing:1.2,
    color:'white'
  },
  contentContainer: {
    padding: 10
  },
  backgroundHeader: {
    height: 200,
    justifyContent:'flex-end',
    padding:10,
    paddingBottom:20,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    overflow:'hidden'
  },
  subtitle:{
    fontSize:20,
    color:Colors.light.darkL
  }


})

export default TopicScreen;