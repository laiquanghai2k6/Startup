import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import quiz from '../../../assets/data/quiz'
import Markdown from 'react-native-markdown-display';
import MultipleChoiceAnswer from '../../components/MultipleChoiceAnswer/MultipleChoiceAnswer';
import CustomBotton from '../../components/CustomButton/CustomBotton';
import ProgressBar from '../../components/ProgressBar';

const question = quiz[0];

const QuizScreen = () => {
  const [questionIndex,setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(quiz[questionIndex]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [answeredCorrectly,setAnsweredCorrectly] = useState<
  boolean | undefined>(undefined);
  const[numberOfCorrectAnswers,setNumberOfCorrectAnswers] = useState(0);
  
  useEffect(() => {
    if(questionIndex === quiz.length){
      Alert.alert("Quiz finished",
      `You answered correctly ${numberOfCorrectAnswers} out of ${quiz.length} questions`);
      return;
    }

    setQuestion(quiz[questionIndex]);
    setAnsweredCorrectly(undefined);
  },[questionIndex])

  const onChoicePress = (choice) => {
    setSelectedAnswers(currentSelectedAnswers => {
      if (currentSelectedAnswers.includes(choice)) {
        return currentSelectedAnswers.filter(answer => answer !== choice)
      } else {
        if (question.correctAnswers.length > 1)
          return [...currentSelectedAnswers, choice];
        else
          return [choice]
      }
    });
  }



  const onSubmit = () => {
    if (selectedAnswers.length !== question.correctAnswers.length) {
      setAnsweredCorrectly(false)
      return;
    } else {
      const isCorrect = question.correctAnswers.every((answer) =>
        selectedAnswers.includes(answer)
      );
      setAnsweredCorrectly(isCorrect); 
      if(isCorrect){
        setNumberOfCorrectAnswers((n)=> n + 1);
      }
    }
  }
  const isButtonDisabled = selectedAnswers.length === 0;
  const onContinue = () => {
    setQuestionIndex((index) => index + 1)
  }
  return (
    <>
    <ProgressBar progress={questionIndex/quiz.length} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.question}>{question.question}</Text>
        {!!question.image && (<Image
          source={{ uri: question.image }}
          style={styles.questionImage}
          resizeMode={"contain"}
        />
        )}

        {!!question.content && <Markdown>{question.content}</Markdown>}
        <View style={styles.choicesContainer}>
        {question.choices?.map((choice) =>(
          <MultipleChoiceAnswer
            key={choice}
            choice={choice}
            onPress={onChoicePress}
            isSelected={selectedAnswers.includes(choice)}
            disabled={answeredCorrectly !== undefined}

          />
        ))}
        </View>

 
          <CustomBotton text="Submit"
            disabled={isButtonDisabled}
            onPress={onSubmit} />
    



      </ScrollView>
      {answeredCorrectly === true && <View style={[styles.answerBox,styles.correctAnswerBox]}>
          <Text style={styles.correctTitle}>Correct</Text>
        <CustomBotton text="Continue"       
          onPress={onContinue}         
          />
      </View>}

      {answeredCorrectly === false &&<View style={[styles.answerBox,styles.wrongAnswerBox]}>
          <Text style={styles.wrongTitle}>Wrong</Text>
        <CustomBotton text="Continue"         
          onPress={onContinue}          
          />
      </View>}

    </>
  )
}


const styles = StyleSheet.create({



  container: {
    backgroundColor: Colors.light.white,
    padding: 10,
    flexGrow: 1,
  },
  question: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10
  },
  questionImage: {

    width: '100%',
    height: 300,

  },
  choicesContainer: {
    marginTop: 'auto'
  },
  answerBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding:10,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor: Colors.light.background,
    width: '100%',
    borderColor: Colors.light.primary,
    borderWidth:1,
    borderBottomWidth:0,
    shadowColor:'#000',
    shadowOffset: {
      width: 2,
      height:6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  correctAnswerBox: {
    borderColor:Colors.light.primary,
    backgroundColor:Colors.light.background,
  },
  wrongAnswerBox: {
    borderColor:Colors.light.secondary,
    backgroundColor:Colors.light.backgroundError,
  },
  correctTitle:{
    fontSize:16,
    color:Colors.light.primary,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  wrongTitle:{
    fontSize:16,
    color:Colors.light.secondary,
    fontWeight: 'bold',
    marginVertical: 10,
  },
})
export default QuizScreen