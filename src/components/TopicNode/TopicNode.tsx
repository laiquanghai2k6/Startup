import {
  View, Text, Image, StyleSheet, useWindowDimensions
  , Pressable

} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import { Topic, UserTopicProgress } from '../../models'
import CircularProgress from '../CircularProgress/CircularProgess';
import { useNavigation } from '@react-navigation/native';
import { S3Image } from 'aws-amplify-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Auth, DataStore } from 'aws-amplify';
import { TopicWithResult } from '../../type/models';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

interface TopicNodeProps {
  topic: TopicWithResult;
  isDisabled?: boolean;
}




const TopicNode = ({ topic, isDisabled = false }: TopicNodeProps) => {
  const [masteryPoint, setMasteryPoint] = useState("");
  const { width } = useWindowDimensions();
  const navigation = useNavigation();



  const itemWidth = width / 3 - 30;
  const onPress = () => {
    navigation.navigate("Topic", { id: topic.id });
  }

  useEffect(() => {
    if (topic.quizResult && topic.quizResult?.percentage >= 0.9) {
      setMasteryPoint("https://loltracker.com/images/easyblog_shared/articles_philidia/CyclePBE516/b2ap3_thumbnail_20150818Mastery7.png")
    } else if (topic.quizResult && topic.quizResult?.percentage < 0.9 && topic.quizResult?.percentage >= 0.7) {
      setMasteryPoint("https://loltracker.com/images/easyblog_shared/articles_philidia/CyclePBE516/b2ap3_thumbnail_20150818Mastery6.png")
    }
    else if (topic.quizResult && topic.quizResult?.percentage < 0.7 && topic.quizResult?.percentage >= 0.5) {
      setMasteryPoint("https://vignette.wikia.nocookie.net/leagueoflegends/images/9/96/Champion_Mastery_Level_5_Flair.png/revision/latest?cb=20150312005344")
    } else if (topic.quizResult && topic.quizResult?.percentage < 0.5 && topic.quizResult?.percentage >= 0.4) {
      setMasteryPoint("https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b6/Champion_Mastery_Level_4_Flair.png/revision/latest?cb=20150312005332")
    } else if (topic.quizResult && topic.quizResult?.percentage < 0.4 && topic.quizResult?.percentage >= 0.3) {
      setMasteryPoint("https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/300779622_466629465358735_4503815875965780700_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=i4HouJf7GYcAX-e349_&_nc_ht=scontent.fhph1-2.fna&oh=03_AVKv8XADzOpm2sKJ8zJqOw9F_NK_Ob9b1HTVOs5n8t62jg&oe=63303F40")
    } else{
      setMasteryPoint("https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4d/Champion_Mastery_Level_2_Flair.png/revision/latest?cb=20150312005244")
    }
    
  }, [topic.quizResult])
  





  return (
    <Pressable onPress={onPress}
      disabled={isDisabled}
      style={[styles.container, { width: itemWidth }]}>
      <View style={styles.progress}>
        {<CircularProgress size={itemWidth}
          strokeWidth={7}
          progress={topic.progress?.progress || 0}

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

          <View
            style={[styles.percentageBox,  
              {backgroundColor : topic.isQuizPassed 
              ? Colors.light.primary
              : Colors.light.tabIconDefault
            }
          ]}
          >
            <Image

              style={styles.mastery
            
              }
              source={
                {
                  uri: (masteryPoint)
                }}
                
                />

          </View>

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
    alignSelf: 'center',


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
  percentageBox: {
    position: "absolute",
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.white,
    borderWidth: 2,
    bottom: -30,
    right: -30,

    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 20,

  },
  mastery: {
    height: 25,
    width: 25,
  }

})

export default TopicNode