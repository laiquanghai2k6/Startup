import { StyleSheet, Text, TextInput, View, Image, TextInputComponent, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { QuestionIF } from './AddCourseScreen'
import { InputQuestion } from './QuestionGroup'
import * as ImagePicker from 'expo-image-picker'
import {Picker} from '@react-native-picker/picker';
interface Question {
  numberquestion: number,
  isSubmit: boolean,
  handleUpdateQuestion: (value: string, type: InputQuestion, numberQues: number) => void
}
const PLACEHOLDER_IMG =

  'https://th.bing.com/th/id/OIP.QrR56voakzVibJnCtTWw7gHaEK?pid=ImgDet&rs=1'


const Question = (props: Question) => {
  const { numberquestion, isSubmit, handleUpdateQuestion } = props
  const [image,setImage] = useState("")
  const [selectedValue,setSelectedValue] = useState("")
  let base64 ="data:image/jpeg;base64,"
  const handleInput = (val: string, type: InputQuestion) => {
    handleUpdateQuestion(val, type, numberquestion)
  }
  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      // base64: true
    })
    if (!result.cancelled) {
      console.log(result.uri)
      setImage(result.uri)
      
      // if(result.uri != ""){
        handleInput(result.uri, InputQuestion.IMAGE)
        // }else{
        // handleInput("", InputQuestion.IMAGE)
    }
    

    }
  
  // console.log("IMAGE:",image)
  return (
    <View>
      <Text style={{ color: 'white', fontWeight: '800', fontSize: 16, alignSelf: 'center' }}>Câu thứ {numberquestion}: </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Câu Hỏi: </Text>
        <TextInput style={{ borderColor: 'white', borderWidth: 2, width: 230, marginLeft: 'auto', color: 'white' }}
          onChangeText={e => { handleInput(e, InputQuestion.TEXT) }}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Hình ảnh nếu có: </Text>
        {/* {image == "" ?
            (
            <TextInput style={{borderColor:'white',borderWidth:2,width:230,marginLeft:'auto',color:'white'}}
               onChangeText={e => { handleInput(e, InputQuestion.IMAGE)}}
            />
            ) : (
              <View></View>
                ) */}
        <TouchableOpacity onPress={PickImage} disabled={image != ""}>
          <Image
            source={{ uri: image != "" ? image : PLACEHOLDER_IMG }}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: 'https://img.icons8.com/nolan/344/1A6DFF/C822FF/image.png' }}
          style={{ width: 30, height: 30, marginHorizontal: 5 }}

        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Đáp án thứ 1: </Text>

        <TextInput style={{ borderColor: 'white', borderWidth: 2, width: 230, marginLeft: 'auto', color: 'white' }}

          // onChangeText={(val) => { setQ1(val) }}
          onChangeText={e => { handleInput(e, InputQuestion.QUESTION_1) }}

        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Đáp án thứ 2: </Text>

        <TextInput style={{ borderColor: 'white', borderWidth: 2, width: 230, marginLeft: 'auto', color: 'white' }}
          onChangeText={e => { handleInput(e, InputQuestion.QUESTION_2) }}

        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Đáp án thứ 3: </Text>

        <TextInput style={{ borderColor: 'white', borderWidth: 2, width: 230, marginLeft: 'auto', color: 'white' }}
          onChangeText={e => { handleInput(e, InputQuestion.QUESTION_3) }}

        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Đáp án thứ 4: </Text>

        <TextInput style={{ borderColor: 'white', borderWidth: 2, width: 230, marginLeft: 'auto', color: 'white' }}
          onChangeText={e => { handleInput(e, InputQuestion.QUESTION_4) }}

        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 10 }}>
        <Text style={{ color: 'white' }}>Đáp án đúng(bấm vào): </Text>

        {/* <TextInput style={{ borderColor: 'white', borderWidth: 2, width: 230, color: 'white' }}
          onChangeText={e => { handleInput(e, InputQuestion.RESULT) }}


        /> */}
         <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 160,backgroundColor:'white'}}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue)
          handleInput(itemValue, InputQuestion.RESULT)
          
          }}>
        {/* <Picker.Item label="Chọn đáp án " value="1" /> */}
        <Picker.Item label="Đáp án thứ 1" value="1" />
        <Picker.Item label="Đáp án thứ 2" value="2" />
        <Picker.Item label="Đáp án thứ 3" value="3" />
        <Picker.Item label="Đáp án thứ 4" value="4" />
      </Picker>
      </View>


    </View>
  )
}

export default Question

const styles = StyleSheet.create({})