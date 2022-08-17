import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../../constants/Colors'
import ResourceListItem from '../../components/ResourceListItem/ResourceListItem'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList, RootStackScreenProps } from '../../type/navigation'
import topics from '../../../assets/data/topics'
import Markdown from 'react-native-markdown-display';
import TopicSection from './TopicSection'
import CustomButton from '../../components/CustomButton'
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround'

const TopicScreen = ({ route, navigation }: RootStackScreenProps<'Topic'>) => {

  const topicId = route.params.id;
  const topic = topics.find((t) => t.id === topicId)
  useApplyHeaderWorkaround(navigation.setOptions)
 
  useEffect(()=>{
    if (topic) {
      navigation.setOptions({ title: topic?.title })
    }
  },[topic])


  const onStartQuiz = () =>{
    navigation.navigate("Quiz", {id:"123"})
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TopicSection title='Intro' display={!!topic?.description}>
        <Markdown>
          {topic?.description}

        </Markdown>
      </TopicSection>
      {topic?.resources && (
        <TopicSection title='Resources' display={!!topic?.resources}>
          
          {topic?.resources?.map((resource, index) => (
            <ResourceListItem
              key={resource.id}
              resource={resource}
              index={index}
              isLast={index + 1 === topic.resources.length}
            />

          ))}
        </TopicSection>
      )}

      <TopicSection title='Context' display={!!topic?.context}>
        <Markdown>{topic?.context}</Markdown>
      </TopicSection>
      <TopicSection title='Practice' display={!!topic?.exercises}>

        {topic?.exercises?.map((resource, index) => (
          <ResourceListItem
            key={resource.id}
            resource={resource}
            index={index}
            isLast={index + 1 === topic.resources.length}
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