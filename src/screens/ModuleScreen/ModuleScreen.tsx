import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacityBase } from 'react-native'
import React from 'react'
import TopicNode from '../../components/TopicNode'
import TopicNodeRow from '../../components/TopicNodeRow'
import { useNavigation, useRoute } from '@react-navigation/native'

// import topics from '../../../assets/data/topics'
import { getCurrentActiveLevel, groupByLevel } from '../../utils/topics'
import { Auth, DataStore } from 'aws-amplify'
import { Topic } from '../../models'
import { RootStackScreenProps } from '../../type/navigation'
import { QuizResult } from '../../models'
import { TopicWithResult } from '../../type/models'



const ModuleScreen = () => {

  const [levels, setLevels] = useState<TopicWithResult[][]>([]);
  const [currentLevel,setCurrentLevel] = useState<number>(0)


  useEffect(() => {
    const fetchTopics = async () => {
      const quizTopics = await DataStore.query(Topic)
      const idsTopic = quizTopics.map(topic => topic.id);

      const topics = await Promise.all(idsTopic.map(async (idTopic) => {
        let topic = await DataStore.query(Topic, idTopic);
        return topic
      }))
      // console.log("New: ", quizTopics)
      const topicsWithProgress = await addProgressToTopics(topics);
      const _levels = groupByLevel(topicsWithProgress)
      setCurrentLevel(getCurrentActiveLevel(_levels));

      setLevels(_levels)

    }
    fetchTopics();
  }, [])

  const addProgressToTopics = async (
    topics: Topic[]
  ): Promise<TopicWithResult[]> => {
    const topicsWithProgress = await Promise.all(
      topics.map(addProgressToTopic)

    )
    return topicsWithProgress
  }

  const addProgressToTopic = async (topic: Topic) => {
    if (!topic.Quiz) {
      console.log("no quiz: ", topic.id)
      return topic
    }
    const userData = await Auth.currentAuthenticatedUser();
    const userResults = (await DataStore.query(QuizResult)).filter(
      (result) =>
        result.quizId === topic.Quiz?.id &&
        result.sub === userData?.attributes.sub
    );
    if (userResults.length === 0) {
      // user hasnt done the quiz yet
      return topic
    }

    const bestResult = userResults.reduce((best, result) =>
      result.percentage > best.percentage ? result : best
    )
    return {
      ...topic,
      quizResult: bestResult,
      isQuizPassed: bestResult && bestResult.percentage >= 0.9
    }
  }




  return (
    <View style={styles.container}>

      <FlatList data={levels}
        renderItem={({ item }) => (
          <TopicNodeRow>
            {item.map(topic => (
              <TopicNode topic={topic}
                key={topic.id}
              isDisabled={currentLevel < topic.level}
              />
            ))}
          </TopicNodeRow>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',


  }
})

export default ModuleScreen