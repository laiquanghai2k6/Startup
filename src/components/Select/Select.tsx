import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { useAppSelector } from '../../redux/hook'
import { selectCourse } from '../../slice/AddCourseSlice'

// Options data must contain 'item' & 'id' keys


const KHOA_HOC = [
  {
    item:'Học Online',
    id:10
  },
  {
    item:"Học Offline",
    id:11
  }

]
const MON_HOC = [
  {
    item:'Toán Học',
    id:1
  },
  {
    item:"Văn Học",
    id:2
  }, {
    item:'Hóa',
    id:3
  },
  {
    item:"Vật Lí",
    id:4
  } ,{
    item:'Lịch Sử',
    id:5
  },
  {
    item:"Địa Lí",
    id:6
  }, {
    item:'Tin Học',
    id:7
  },
  {
    item:"Tiếng Anh",
    id:8
  }
]
function Select() {
  const [selected1stItem, setSelected1stItem] = useState({})
  const [selected2ndItem, setSelected2ndItem] = useState({})
  const [selected3rdItem, setSelected3rdItem] = useState({})
  const Subject = useAppSelector(selectCourse)
  // const onlineSubject = Subject.map((subject)=>{
  //   return subject.courses
  // })
  // console.log("onlineSubject",onlineSubject)

  return (
    <View style={{ margin: 30,flexDirection:'column' }}>
      <Text style={{color:'white',fontSize:18,fontWeight:'800',color:'yellow'}}>Chọn Đường Dẫn Đến Khóa Học</Text>
      <SelectBox
        label=""
        options={KHOA_HOC}
        value={selected1stItem}
        onChange={(val) => setSelected1stItem(val)}
        hideInputFilter={false}
        labelStyle={{color:'white'}}
        selectedItemStyle={{color:'white'}}
        searchIconColor='white'
        toggleIconColor='white'
        arrowIconColor='white'
        optionsLabelStyle={{color:'white'}}
        inputPlaceholder='Chọn Khóa Học'
      />
         <SelectBox
        label=""
        options={MON_HOC}
        value={selected2ndItem}
        onChange={(val) => setSelected2ndItem(val)}
        hideInputFilter={false}
        labelStyle={{color:'white'}}
        selectedItemStyle={{color:'white'}}
        searchIconColor='white'
        toggleIconColor='white'
        arrowIconColor='white'
        optionsLabelStyle={{color:'white'}}
        inputPlaceholder='Chọn Môn Học'
      />
         <SelectBox
        label=""
        options={MON_HOC}
        value={selected3rdItem}
        onChange={(val) => setSelected3rdItem(val)}
        hideInputFilter={false}
        labelStyle={{color:'white'}}
        selectedItemStyle={{color:'white'}}
        searchIconColor='white'
        toggleIconColor='white'
        arrowIconColor='white'
        optionsLabelStyle={{color:'white'}}
        inputPlaceholder='Chọn Tên'
      />
 
    </View> 
  )

 

  function onChange() {
    return 
  }
}

export default Select