
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Course, QuestionIF } from './AddCourseScreen'
import Question from './Question'
import { ConsoleLogger } from '@aws-amplify/core'
import { RotateInUpLeft } from 'react-native-reanimated'
import { COURSE, QUIZ, SUBJECT } from '../../../assets/data/subject'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { addCourseAction } from '../../slice/AddCourseSlice'
import { RootStackScreenProps } from '../../type/navigation'
import { useNavigation } from '@react-navigation/native'
import Navigation from '../../navigation'
import axios from 'axios'
import { selectUserName, SetUserAction } from '../../slice/setUser'
import { selectStudy, SetStudyAction } from '../../slice/setStudy'

interface QuestionGroupProps {
  numberQuestions: number,
  isSubmit: boolean,
  typeScreen: string, //courseId
  nameCourse:string,
  classes:string,
  max:number
}

export enum InputQuestion {
  TEXT,
  QUESTION_1,
  QUESTION_2,
  QUESTION_3,
  QUESTION_4,
  RESULT,
  IMAGE
}
const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'

const QuestionGroup = (props: QuestionGroupProps) => {
  const { numberQuestions,
     isSubmit,
     typeScreen,
     nameCourse,classes,max } = props
  const b = isSubmit
  const [questions, setQuestions] = useState<QuestionIF[]>([])
  const navigation = useNavigation()
  const user = useAppSelector(selectUserName)
  console.log("MAX:",max+1)
  
  const DISPATCH = useAppDispatch()
     
      const handleUpdateQuestion = (value: string, type: InputQuestion, numberQues: number) => {
    
        setQuestions(questionsPrev => {    
          let questionUpdate: QuestionIF;
          let indexUpdate = 0;
            indexUpdate = questionsPrev.findIndex(question => question.numberQuestion === numberQues);
           
            if (indexUpdate === -1) {
              questionUpdate = {
                text:'',
                image: '',
                question1: '',
                question2: '',
                question3: '',
                question4: '',
                result: '',
                numberQuestion: numberQues
              }
            } else {
              questionUpdate = questionsPrev[indexUpdate]
            }
          
          
          if (type === InputQuestion.QUESTION_1) {
              questionUpdate.question1 = value
  
          } else if (type === InputQuestion.QUESTION_2) {
            questionUpdate.question2 = value
          } else if (type === InputQuestion.QUESTION_3) {
            questionUpdate.question3 = value
            
          } else if (type === InputQuestion.QUESTION_4) {
            questionUpdate.question4 = value
            
          } else if (type === InputQuestion.IMAGE) {
         
            questionUpdate.image = value
           
          
          }else if(type === InputQuestion.TEXT){
            questionUpdate.text = value
          } else {
            questionUpdate.result = value
          
          }
          // console.log("Update", questionUpdate)
          //console.log("", questionUpdate)
          if (indexUpdate === -1) {
            questionsPrev.push(questionUpdate)
          } else {
            questionsPrev[indexUpdate] = questionUpdate

          }

         return questionsPrev
        })
      }
      if(b){
        
        var urlCreateQuiz = ngrok+'/createQuiz'
        var urlCreateCourse = ngrok+'/createCourse'
        var urlImage = ngrok+'/upload'
        const createCourse = async ()=>{
          await axios.post(urlCreateCourse,{
            courseName:nameCourse,
            created:user.user,
            classes:classes,
            subjectId:typeScreen
          })
        }
        createCourse()
        questions.map(async (question,index)=>{ 
          console.log("question.image.slice(60)",question.image.slice(60))   
          console.log("question.text",question.text)
            await axios.post(urlCreateQuiz,{
              quizImage: question.image.slice(60),
              a1:question.question1,
              a2:question.question2,
              a3:question.question3,
              a4:question.question4,
              correctA:question.result,
              quizText:question.text.toString(),

              courseId:max+1,
            }).then((r)=>console.log(r))
            .catch((e)=>console.log(e))
        })

        questions.map(async (question,index)=>{    
        const formData = new FormData()
        const Name = question.image.slice(60)
        console.log("question.image",question.image)
          formData.append("testImage", {
            uri:question.image,
            name:Name,
            fileName:'image',
            type:'image/png'
          
        })
          await axios({
            method:'post',
            url:urlImage,
            data:formData,
            headers: {
        
              'Content-Type' : 'multipart/form-data',
              'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
              
          }
          }).then((r)=>console.log(r))
          .catch((e)=>console.log(e))
      })


        DISPATCH(SetStudyAction.setTest(1))
        // questions.map((question,index)=>{
        //   console.log(question.result)
        // })

      
      
        navigation.navigate('Root')
      

      }
      return (
       <>
        {
          
           Array.from(Array(numberQuestions).keys()).map((els) => {
            return (
              <Question isSubmit={isSubmit} numberquestion={els + 1} handleUpdateQuestion={handleUpdateQuestion}/>
            )

          })
        }
       </>
      )
}

export default QuestionGroup

const styles = StyleSheet.create({})