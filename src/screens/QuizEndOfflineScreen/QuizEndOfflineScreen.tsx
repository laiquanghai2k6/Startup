import { View, Text, Image, StyleSheet, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import star from '../../../assets/images/star.png'
import christmas from '../../../assets/images/christmas-star.png'
import CustomButton from '../../components/CustomButton'
import Colors from '../../constants/Colors'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { selectUserName, SetUserAction } from '../../slice/setUser'
import axios from 'axios'
const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'

const QuizEndOfflineScreen = ({ route, navigation }: RootStackScreenProps<"QuizEndOfflineScreen">) => {
  const { nofQuestions, nofCorrectAnswer} = route.params;
  const percentage = (nofCorrectAnswer / nofQuestions) * 100;
  const dispatch = useAppDispatch()
    console.log("GG")
    const currentUser = useAppSelector(selectUserName)
 
const [positionDanhGia,setPositionDanhGia] = useState(0)

  const KhoEmojiHandle = () =>{
    setPositionDanhGia(1);
  }
  const HoiKhoEmojiHandle = () =>{
    setPositionDanhGia(2);
  }
  const BinhThuongEmojiHandle = () =>{
    setPositionDanhGia(3);
  }
  const DeEmojiHandle = () =>{
    setPositionDanhGia(4);
  }
  const CucDeEmojiHandle = () =>{
    setPositionDanhGia(5);
  }
  const SubmitHandler = () =>{
    const urlScore =  ngrok+'/updateScore'
  
    const a = currentUser.score
    axios.post(urlScore,{
      score:(a+(nofCorrectAnswer * 20)),
      id:currentUser.id,
    }).then((res) => {
      console.log('updated like')

    }).catch(e => console.log(e))
    dispatch(SetUserAction.setscore(a+(nofCorrectAnswer * 20)))
    
   navigation.navigate("Root")
  }
  return (
    <>
      <View style={styles.container1}>
        <Image source={{ uri: 'https://33.media.tumblr.com/73a4d2129f67037fd4ba71222aec7d15/tumblr_nnhpi7SyTI1rby04wo1_250.gif' }}
          style={{
            width: 100,
            height: 100,
            marginTop: 30

          }}
        />
        <Text style={{ color: 'white', fontSize: 19, fontWeight: '600', marginTop: 20 }}>Số câu trả lời đúng:{nofCorrectAnswer} / {nofQuestions} </Text>
        <View style={{ backgroundColor: 'white', marginTop: 30, height: 80, width: 270, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: '300' }}>Tổng điểm  </Text>
          <Text style={{ fontWeight: '500', fontSize: 45 }}>{nofCorrectAnswer * 20}</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={{ marginTop: 30, fontSize: 20,fontWeight:'600'}}>Đánh giá khóa học này</Text>
        <View style={{ flexDirection: 'row',marginTop:20, width: 340, height: 100, backgroundColor: '#87d37bcc', borderRadius: 10 ,justifyContent:'space-between'}} >
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={KhoEmojiHandle}>
              <Image
                style={{ width: 50, height: 50,borderRadius:15 }}
                source={positionDanhGia >= 1 ? christmas : star}
              />
            </TouchableOpacity>
            <Text style={{fontWeight:'600'}}>Khó</Text>
          </View>
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={HoiKhoEmojiHandle} >
              <Image
                style={{ width: 50, height: 50,borderRadius:15
              
              }}
                source={positionDanhGia >= 2 ? christmas : star}
              />
            </TouchableOpacity>
            <Text style={{fontWeight:'600'}}>Hơi khó</Text>
          </View>
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={BinhThuongEmojiHandle}>
              <Image
                style={{ width: 50, height: 50,borderRadius:15,}}
                source={positionDanhGia >= 3 ? christmas : star}
              />
            </TouchableOpacity>
            <Text style={{fontWeight:'600'}}>Bình thường</Text>
          </View>
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={DeEmojiHandle}>
              <Image
                style={{ width: 50, height: 50,borderRadius:15,}}
                source={positionDanhGia >= 4 ? christmas : star}
              />
            </TouchableOpacity>
            <Text style={{fontWeight:'600'}}>Dễ</Text>
          </View>
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={CucDeEmojiHandle}>
              <Image
                style={{ width: 50, height: 50 ,borderRadius:15,}}
                source={positionDanhGia >= 5 ? christmas : star}
              />
            </TouchableOpacity>
            <Text style={{fontWeight:'600'}}>Cực dễ</Text>
          </View>
        </View>
        
        <CustomButton text="Hoàn Thành" type="PRIMARY"  style={{width: 330,marginTop:120}}
        disabled={positionDanhGia == 0}
          onPress={SubmitHandler} 
          />
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  container1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#663398',


  },
  container2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.light.white,


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
    color: 'white'
  },
  text: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: 'white'

  },
  buttonContainer: {
    alignSelf: 'stretch'
  }
})


export default QuizEndOfflineScreen