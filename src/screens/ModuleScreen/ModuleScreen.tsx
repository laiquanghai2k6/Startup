import { View, Text, StyleSheet, Image, FlatList, TouchableOpacityBase } from 'react-native'
import React from 'react'
import TopicNode from '../../components/TopicNode/TopicNode'
import TopicNodeRow from '../../components/TopicNodeRow'
import topics from '../../../assets/data/topics'
import { getCurrentActiveLevel, groupByLevel } from '../../utils/topics'

const levels = groupByLevel(topics);
const currentLevel = getCurrentActiveLevel(levels)


const ModuleScreen = () => {
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