import {
  View, Text, Image, StyleSheet, useWindowDimensions
  , Pressable

} from 'react-native'
import React, { useEffect,useState } from 'react'
import Colors from '../../constants/Colors'
import { Topic,UserTopicProgress } from '../../models'
import CircularProgress from '../CircularProgress/CircularProgess';
import { useNavigation } from '@react-navigation/native';
import { S3Image } from 'aws-amplify-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Auth, DataStore } from 'aws-amplify';


interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}




const TopicNode = ({ topic, isDisabled = false }: TopicNodeProps) => {
  const [progress,setProgress] = useState(0);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  useEffect(() => {
      (async ()=>{
        const userData = await Auth.currentAuthenticatedUser();
        const userTopicProgresses = await DataStore.query(UserTopicProgress);

        const userProgress = userTopicProgresses.find(
          (tp)=> tp.topicId === topic?.id && tp.sub === userData?.attributes.sub
        );
        if(userProgress){
          setProgress(userProgress?.progress || 0)
        }
      }

      )()
  }, [topic])

  const itemWidth = width / 3 - 30;
  const onPress = () => {
    navigation.navigate("Topic", { id: topic.id });
  }


  return (
    <Pressable onPress={onPress}
      disabled={isDisabled}
      style={[styles.container, { width: itemWidth }]}>
      <View style={styles.progress}>
        {<CircularProgress size={itemWidth}
          strokeWidth={7}
          progress={progress}

        />}
        <View style={[styles.circle,
        {
          width: itemWidth - 20,

          backgroundColor: isDisabled ? Colors.light.darkL : Colors.light.primary
        },
        ]}

        >
          {topic.icon ? (
            <S3Image
              imgKey={topic.icon}
              style={styles.image} />
          ) : (
            <FontAwesome5 name="question" size={35} color="black" />
          )}

        </View>

      </View>
      <Text style={styles.title}>{topic.title}</Text>

    </Pressable>
  )
}
const styles = StyleSheet.create({

  container: {


    alignItems: 'center',
    margin: 10,

    maxWidth: 150,

  },

  progress: {


    width: '100%',
    justifyContent: 'center',
    aspectRatio: 1,
  },

  circle: {

    aspectRatio: 1,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'

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