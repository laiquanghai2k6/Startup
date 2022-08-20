import { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacityBase } from 'react-native'
import React from 'react'
import TopicNode from '../../components/TopicNode/TopicNode'
import TopicNodeRow from '../../components/TopicNodeRow'
import topics from '../../../assets/data/topics'
import {  groupByLevel } from '../../utils/topics'
import {DataStore} from 'aws-amplify'
import { Topic } from '../../models'





const ModuleScreen = () => {
  const [levels,setLevels] = useState<Topic[][]>([]);
  const [currentLevel,setCurrentLevel] = useState<number>(0)
  useEffect(()=>{
    const fetchTopics = async () =>{
      const topics = await DataStore.query(Topic);
      const _levels = groupByLevel(topics)
      setLevels(_levels)
 

    }
    fetchTopics();
  
  },[])
 
  return (
    <View style={styles.container}>

      <FlatList data={levels}
        renderItem={({ item }) => (
          <TopicNodeRow>
            {item.map(topic => (
              <TopicNode topic={topic}
                key={topic.id}
                // isDisabled={currentLevel < topic.level}
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