import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Topic } from '../../type/models'


interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}


const TopicNode = ({ topic, isDisabled = true }: TopicNodeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.progress}>

        <View style={[styles.circle,
        { backgroundColor: isDisabled ? Colors.light.darkL : Colors.light.primary },
        ]}

        >
          <Image
            source={{
              uri: topic.icon
            }}
            style={styles.image} />
        </View>
      </View>
      <Text style={styles.title}>{topic.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({


  progress:{
    backgroundColor:Colors.light.darkL,
    padding:10,
    borderRadius:999

  },

  container: {


    alignItems: 'center',
    margin: 10,
    width: '30%',
    maxWidth: 150
  },
  circle: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: Colors.light.tertiary,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    borderColor:Colors.light.background

  },
  image: {
    width: '50%',
    aspectRatio: 1,

  },
  title: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'

  },
})

export default TopicNode