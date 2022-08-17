import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import happyboy from '../../../assets/images/happyboy.png'
import sadboy from '../../../assets/images/sadboy.png'
import CustomButton from '../../components/CustomButton'
import Colors from '../../constants/Colors'

const QuizEndScreen = ({ route,navigation }: RootStackScreenProps<"QuizEndScreen">) => {
  const { nofQuestions, nofCorrectAnswer } = route.params;
  const percentage = (nofCorrectAnswer / nofQuestions) * 100;
  const isHappy = percentage > 70
  const happyText = "Sir! you drop this 👑"
  const sadText = "You suck 🤏"
  const text = isHappy ? happyText : sadText
  const onPress = () =>{
    navigation.navigate("Root")
  }
  return (
    <View style={styles.container}>
      <Image source={percentage > 70 ? happyboy : sadboy}
        style={styles.image}
        resizeMode={"contain"}
      />
      <Text style={styles.text}>{text}</Text>

      <Text style={[styles.title, { color: isHappy ? Colors.light.primary : Colors.light.secondary }]}>
        {(nofCorrectAnswer / nofQuestions) * 100}%</Text>
      <Text style={styles.subtitle}>
        {nofCorrectAnswer}/{nofQuestions}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton text="Continue" onPress={onPress} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.light.white,
    padding: 10,

  },
  image: {
    width: '100%',
    aspectRatio: 2,

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333336',
    marginVertical: 10
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 'auto',
    color: '#666'
  },
  text: {
    fontSize: 20,
    color: '#666'

  },
  buttonContainer: {
    alignSelf: 'stretch'
  }
})


export default QuizEndScreen