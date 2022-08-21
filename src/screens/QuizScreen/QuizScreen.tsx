import { View, Text, Image, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import quiz from '../../../assets/data/quiz'
import Markdown from 'react-native-markdown-display';
import MultipleChoiceAnswer from '../../components/MultipleChoiceAnswer/MultipleChoiceAnswer';
import CustomBotton from '../../components/CustomButton/CustomBotton';
import ProgressBar from '../../components/ProgressBar';
import { RootStackScreenProps } from '../../type/navigation';
import Animated, { SlideInDown } from 'react-native-reanimated';
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround';
import styles from './QuizScreen.style'
import { Auth, DataStore } from 'aws-amplify';
import { Quiz, QuizQuestion, QuizResult } from '../../models';
import { S3Image } from 'aws-amplify-react-native'
import { UserTopicProgress } from '../../models';



const QuizScreen = ({ navigation, route }: RootStackScreenProps<"Quiz">) => {
  const [quiz, setQuiz] = useState<Quiz | undefined>();
  const [questionIndex, setQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const question = questions[questionIndex]
  // const [question, setQuestion] = useState(quiz[questionIndex]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<
    boolean | undefined>(undefined);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [wrongAnswersIDs,setWrongAnswersIDs] = useState<string[]>([])

  const [previousResult, setPreviousResult] = useState<QuizResult | undefined>()


  const quizId = route.params.id;
  useEffect(() => {

    DataStore.query(Quiz, quizId).then(setQuiz).catch(console.log)
  }, [quizId]);

  useEffect(()=>{
    if(answeredCorrectly === false && !wrongAnswersIDs.includes(question.id)){
      setWrongAnswersIDs([...wrongAnswersIDs,question.id])
    }
  },[answeredCorrectly])

  useEffect(() => {
    if (quiz) {

      (async () => {
        const questions = await DataStore.query(QuizQuestion);
        setQuestions(questions.filter((q) => q.quizID === quiz.id));

        //get previous result
        const userData = await Auth.currentAuthenticatedUser();
        const quizResults = await DataStore.query(QuizResult);
        const myQuizResult = quizResults.filter(
          (qr) => qr.quizId === quiz.id && qr.sub === userData?.attributes.sub
        );
      const previousResult = myQuizResult.reduce(
        (acc:undefined | QuizResult,curr)=> !acc || curr.try > acc.try ? curr : acc,
        undefined
      )
        console.log(previousResult)
        setPreviousResult(previousResult);
      })()


    }

  }, [quiz])

  useApplyHeaderWorkaround(navigation.setOptions)


  useEffect( () => {
    (async ()=>{
      if (questionIndex === questions.length && questionIndex > 0) {
        const userData = await Auth.currentAuthenticatedUser();
        if (quiz && userData) {
          DataStore.save(new QuizResult({
            sub: userData?.attributes.sub,
            nofQuestion: questions.length,
            nofCorrectAnswer: numberOfCorrectAnswers,
            percentage: numberOfCorrectAnswers / questions.length,
            failedQuestionIDs:  wrongAnswersIDs,
            try: previousResult ? previousResult.try + 1 : 1,
            quizId: quiz.id
          }))
          navigation.navigate("QuizEndScreen", {
            nofQuestions: questions.length,
            nofCorrectAnswer: numberOfCorrectAnswers,
          });
  
        }
        return;
      }
  
      // setQuestion(quiz[questionIndex]);
      setAnsweredCorrectly(undefined);
    })()
    
  }, [questionIndex])

  const onChoicePress = (choice: string) => {
    setSelectedAnswers(currentSelectedAnswers => {
      if (currentSelectedAnswers.includes(choice)) {
        return currentSelectedAnswers.filter(answer => answer !== choice)
      } else {
        if (question?.correctAnswers && question.correctAnswers.length > 1)
          return [...currentSelectedAnswers, choice];
        else
          return [choice]
      }
    });
  }



  const onSubmit = () => {
    if (!question) {
      return;
    }
    if (selectedAnswers.length !== question.correctAnswers?.length) {
      setAnsweredCorrectly(false)
      return;
    } else {
      const isCorrect = question.correctAnswers.every((answer) =>
        selectedAnswers.includes(answer)
      );
      setAnsweredCorrectly(isCorrect);
      if (isCorrect) {
        setNumberOfCorrectAnswers((n) => n + 1);
      }
    }
  }
  const isButtonDisabled = selectedAnswers.length === 0;
  const onContinue = () => {
    setQuestionIndex((index) => index + 1)
  }
  if (!question) {
    return <ActivityIndicator />
  }
  return (


    <>
      <ProgressBar progress={questionIndex / questions.length} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.question}>{question.question}</Text>
        {!!question.image && (<S3Image
          imgKey={question.image}
          style={styles.questionImage}
          resizeMode={"contain"}
        />
        )}

        {!!question.content && <Markdown>{question.content}</Markdown>}

        {question.choices && (
          <View style={styles.choicesContainer}>
            {question.choices?.map((choice) => (
              <MultipleChoiceAnswer
                key={choice}
                choice={choice}
                onPress={onChoicePress}
                isSelected={selectedAnswers.includes(choice)}
                disabled={answeredCorrectly !== undefined}

              />
            ))}

          </View>
        )}

        <CustomBotton text="Submit"
          disabled={isButtonDisabled}
          onPress={onSubmit} />




      </ScrollView>
      {answeredCorrectly === true &&
        <Animated.View
          entering={SlideInDown.duration(500)}
          exiting={SlideInDown.duration(500)}
          style={[styles.answerBox, styles.correctAnswerBox]}>
          <Text style={styles.correctTitle}>Correct</Text>
          <CustomBotton text="Continue"
            onPress={onContinue}
          />
        </Animated.View>}

      {answeredCorrectly === false && <Animated.View
        entering={SlideInDown.duration(500)}
        exiting={SlideInDown.duration(500)}
        style={[styles.answerBox, styles.wrongAnswerBox]}>
        <Text style={styles.wrongTitle}>Wrong</Text>
        <CustomBotton text="Continue"
          onPress={onContinue}
        />
      </Animated.View>}

    </>
  )
}


export default QuizScreen