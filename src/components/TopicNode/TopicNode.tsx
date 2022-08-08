import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Topic } from '../../type/models'
import Svg, { Circle } from 'react-native-svg';
import CircularProgress from '../CircularProgress/CircularProgess';


interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}




const TopicNode = ({ topic, isDisabled = true }: TopicNodeProps) => {
  const {width} = useWindowDimensions();
  const itemWidth = width/3 -30;
  return (
    <View style={[styles.container,{width:itemWidth}]}>
      <View style={styles.progress}>
       { <CircularProgress size={itemWidth} 
        strokeWidth={7}
         progress={topic.progress}

        />  }
        <View style={[styles.circle,
        { 
          width:itemWidth-20,
         
           backgroundColor: isDisabled ? Colors.light.darkL : Colors.light.primary },
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

  container: {

   
    alignItems: 'center',
    margin: 10,
   
    maxWidth: 150,
   
  },

  progress: {
    
  
    width:'100%',
    justifyContent:'center',
    aspectRatio:1,
  },

  circle: {
 
    aspectRatio: 1,  
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'

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