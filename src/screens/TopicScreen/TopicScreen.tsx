import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import ResourceListItem from '../../components/ResourceListItem/ResourceListItem'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList, RootStackScreenProps } from '../../type/navigation'
import topics from '../../../assets/data/topics'


const TopicScreen = ({ route, navigation }: RootStackScreenProps<'Topic'>) => {

  const topicId = route.params.id;
  const topic = topics.find((t) => t.id === topicId)

  if (topic) {
    navigation.setOptions({ title: topic?.title })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>TopicScreen</Text>
 
      {topic?.resources?.map((resource, index) => (
        <ResourceListItem
          key={resource.id}
          resource={resource}
          index={index}
          isLast={index+ 1  === topic.resources.length }
        />

      ))}
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.light.white,
    flex: 1,
    padding: 10,

  },
  title: {

    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1.1
  },

})

export default TopicScreen;