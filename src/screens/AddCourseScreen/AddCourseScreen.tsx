import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { RootStackScreenProps } from '../../type/navigation';
import CustomBotton from '../../components/CustomButton';
import { useState } from 'react';
import QuestionGroup from './QuestionGroup';
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround';
import { useAppSelector } from '../../redux/hook';
import { selectUserName } from '../../slice/setUser';
import { selectStudy } from '../../slice/setStudy';


export interface QuestionIF {
  text: string
  question1: string,
  question2: string,
  question3: string,
  question4: string,
  result: string,
  image: string,
  numberQuestion: number
}
export interface Course {
  name: string,
  questions: QuestionIF[]
}




const AddCourseScreen = ({ route, navigation }: RootStackScreenProps<'AddCourseScreen'>) => {
  // console.log("check:",route.params.id)
  const [isSubmit, setIsSubmit] = useState(false)
  const [nameCourse, setNameCourse] = useState("")
  const [countQuestion, setCountQuestion] = useState(0)
  const [numberQuestion, setNumberQuestion] = useState("")
  const [numberQuestionGot, setNumberQuestionGot] = useState(false)
  const [classes, setClasses] = useState("")
  const [max,setMax] = useState(0)
  useApplyHeaderWorkaround(navigation.setOptions)
  const study = useAppSelector(selectStudy)

  const [course, setCourse] = useState<Course>({
    name: "",
    questions: []
  })


  const NumberQuestionHandler = () => {
    setCountQuestion(Number(numberQuestion))
    setNumberQuestion("")
    setNumberQuestionGot(true)


  }

  const handleSubmitAddCourse = () => {
    setIsSubmit(true)
    // navigation.goBack()
  }
  study.course.map((c)=>{
    if(max < c.courseId){
      setMax(c.courseId)
    }
  })




  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ color: 'white', marginLeft: 20, fontSize: 17, fontWeight: '500', marginTop: 10 }}>Tên khóa học: </Text>
      <TextInput style={{
        borderWidth: 2, borderColor: 'white', marginHorizontal: 30, marginTop: 10, color: 'white', paddingLeft: 10
      }}
        value={nameCourse}
        onChangeText={(val) => { setNameCourse(val) }}


      />
      <Text style={{ color: 'white', marginLeft: 20, fontSize: 17, fontWeight: '500', marginTop: 10 }}>Dành cho cấp: THCS,THPT,..</Text>
      <TextInput style={{
        borderWidth: 2, borderColor: 'white', marginHorizontal: 30, marginTop: 10, color: 'white', paddingLeft: 10
      }}
        value={classes}
        onChangeText={(val) => { setClasses(val) }}


      />

      <Text style={{ color: 'white', marginLeft: 20, fontSize: 17, fontWeight: '500', marginTop: 10 }}>Số lượng câu hỏi muốn tạo: </Text>
      <TextInput style={{
        borderWidth: 2, borderColor: 'white', marginHorizontal: 30, marginTop: 10, color: 'white', paddingLeft: 10
      }}
        value={numberQuestion}
        onChangeText={(val) => { setNumberQuestion(val) }}

        keyboardType="numeric"
      />
      <TouchableOpacity>
        <CustomBotton text="Tiếp tục"
          onPress={NumberQuestionHandler}
          type="BLUE"
          style={{ marginHorizontal: 130, marginTop: 20 }}
        />
      </TouchableOpacity>
      {numberQuestionGot &&
        <QuestionGroup isSubmit={isSubmit} numberQuestions={+countQuestion} typeScreen={route.params.id} nameCourse={nameCourse} classes={classes} 
        max={max}
        
        />


      }

      {numberQuestionGot && (
        <TouchableOpacity>
          <CustomBotton
            text="Hoàn thành"
            onPress={handleSubmitAddCourse}
            type="BLUE"
            style={{ marginHorizontal: 120, marginTop: 20 }}
          />
        </TouchableOpacity>
      )}





    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});

export default AddCourseScreen