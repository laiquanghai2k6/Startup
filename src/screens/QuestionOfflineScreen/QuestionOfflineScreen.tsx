import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import { QUIZ } from '../../../assets/data/subject'
import ProgressBar from '../../components/ProgressBar'
import MultipleChoices from '../../components/MultipleChoices'
import CustomBotton from '../../components/CustomButton'
import Animated, { SlideInDown } from 'react-native-reanimated'
import Colors from '../../constants/Colors'
import { useAppSelector } from '../../redux/hook'
import { selectCourse } from '../../slice/AddCourseSlice'
import { QUIZOFFLINE, SubjectOffline } from '../../../assets/data/subjectOffline'
let selectedQuestion
let icon
let idSubject
const QuestionOfflineScreen = ({ route, navigation }: RootStackScreenProps<'QuestionOfflineScreen'>) => {
  console.log("NAME:",route.params.id)

    SubjectOffline.find((subject, index) => {
        const t = subject.courses.find((t1, index) => {

            if (t1.name == route.params.id) {
                selectedQuestion = t1
                icon = subject.icon
                idSubject = subject.id
                return t1;
            }
        })

    })
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [indexQuiz, setIndexQuiz] = useState(0)
    const [currentQuiz, setCurrentQuiz] = useState<QUIZOFFLINE>(selectedQuestion.quiz[0])
    const [answeredCorrectly, setAnsweredCorrectly] = useState<
    boolean | undefined>(undefined);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    console.log('indexQuiz',indexQuiz)
    console.log('selectedQuestion.length',selectedQuestion.quiz.length)
    useEffect(()=>{
      if (indexQuiz === selectedQuestion.quiz.length && indexQuiz > 0) {
        console.log("333")
          navigation.navigate("QuizEndOfflineScreen", {
              nofQuestions: selectedQuestion.quiz.length,
              nofCorrectAnswer: numberOfCorrectAnswers,
            });  
      }
   
      
    },[indexQuiz])

    const onChoicesPress = (choice: string) => {
        setSelectedAnswers(currentSelectedAnswers => {
            if (currentSelectedAnswers.includes(choice)) {
              return currentSelectedAnswers.filter(answer => answer !== choice)
            } else {
                return [choice]

            }
          });

      }

   
      
  const onSubmit = () => {
    console.log("999")

    if (!currentQuiz) {
      return;
    }

    
      const isCorrect = selectedAnswers.includes(currentQuiz.CorrectAnswer)
        console.log("isCorrect: ",isCorrect)
      setAnsweredCorrectly(isCorrect);
      if (isCorrect) {
        setNumberOfCorrectAnswers((n) => n + 1);
      }
    
    
    // console.log("selectedAnswers",selectedAnswers);

  }
  const onContinue = () =>{
    setIndexQuiz(indexQuiz + 1)
    setCurrentQuiz(selectedQuestion.quiz[indexQuiz+1])
    setAnsweredCorrectly(undefined)
    setSelectedAnswers([])
  }
  const isButtonDisabled = selectedAnswers.length === 0;
  
    return (<>
    
        <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
       <TouchableOpacity>
        <Image 
            style={styles.logo}
            source={require('../../../assets/images/NewFeedName.png')}
        />
       </TouchableOpacity>  
        <TouchableOpacity>
            <Image 
            style={{width:50,height:50,marginTop:18,marginRight:50}}
            source={{uri:icon}}
            />
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
        
                       
            
        </View>

    </View>
            <ProgressBar progress={(indexQuiz+1) / selectedQuestion.quiz.length  } />
            <Image
                style={{
                    width: '100%',
                    height: 300,
                }}
                source={{ uri: currentQuiz?.quizImage }}
                resizeMode='contain'

            />
            {currentQuiz?.answer && (
                <View style={styles.choicesContainer}>
                    {currentQuiz.answer.map((choices)=>(
                        <MultipleChoices                        
                        key={choices}
                        choice={choices}
                        onPress={onChoicesPress}
                        isSelected={selectedAnswers.includes(choices)}
                        disabled={answeredCorrectly !== undefined}
                        />
                    ),console.log("selectedAnswers",selectedAnswers))}
                </View>
            )}
              <CustomBotton text="Đồng Ý"
          disabled={isButtonDisabled}
          onPress={onSubmit} />
           
        </ScrollView>
         {answeredCorrectly === true &&
            <Animated.View
              entering={SlideInDown.duration(500)}
              exiting={SlideInDown.duration(1)}
              style={[styles.answerBox, styles.correctAnswerBox]}>
              
              <Text style={styles.correctTitle}>Đúng</Text>
              <Text style={{paddingRight:50}}>{currentQuiz.solution}</Text>
              <View style={{marginLeft:'auto',bottom:30,flexDirection:'row',alignItems:'center'}}>
                <Image 
      source={{uri:'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png'}}
                style={{width:25,height:25}}
                />
                <Text style={{fontWeight:'800'}} >+20</Text>
              </View>
              <CustomBotton text="Tiếp Tục"
                onPress={onContinue}
              />
            </Animated.View>}
    
          {answeredCorrectly === false && <Animated.View
            entering={SlideInDown.duration(500)}
            exiting={SlideInDown.duration(1)}
            style={[styles.answerBox, styles.wrongAnswerBox]}>
            <Text style={styles.wrongTitle}>Sai</Text>
            <Text style={{paddingRight:50}}>{currentQuiz.solution}</Text>
            <View style={{marginLeft:'auto',bottom:30,flexDirection:'row',alignItems:'center'}}>
                <Image 
      source={{uri:'https://img.icons8.com/external-febrian-hidayat-flat-febrian-hidayat/344/external-trophy-ui-essential-febrian-hidayat-flat-febrian-hidayat.png'}}
                style={{width:25,height:25}}
                />
                <Text style={{fontWeight:'800'}} >+0</Text>
              </View>
            <CustomBotton text="Tiếp Tục"
              onPress={onContinue}
            />
          </Animated.View>
          
          }
          </>
    )
}

export default QuestionOfflineScreen

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:20,

},
iconsContainer:{
    flexDirection:'row'
},
logo:{
    marginTop:20,
    width:100,
    height:50,
    resizeMode:'contain',
},
icon:{
    width:30,
    height:30,
    marginLeft:10,
    marginTop:20,
    resizeMode:'contain'
},
unreadBadge:{
    backgroundColor:'#FF3250',
    position:'absolute',
    marginTop:20,
    left:20,
    bottom:18,
    width:25,
    height:18,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100,
},
unreadBadgeText:{
    color:'white',
    fontWeight:'600',
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