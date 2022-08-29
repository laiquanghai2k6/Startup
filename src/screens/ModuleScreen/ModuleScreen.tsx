
import { View,  StyleSheet,  FlatList, ActivityIndicator,} from 'react-native'
import React from 'react'
import TopicNode from '../../components/TopicNode'
import TopicNodeRow from '../../components/TopicNodeRow'

import { useModuleContext } from '../../contexts/ModuleContext'



const ModuleScreen = () => {
  const {levels,currentLevel} = useModuleContext();
 

  if(!levels || !currentLevel){
    return <ActivityIndicator />
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