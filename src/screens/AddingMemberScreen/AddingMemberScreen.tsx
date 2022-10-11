import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { USERS } from '../../../assets/data/userStory'
import { RootStackScreenProps } from '../../type/navigation'
import { UserSelected } from '../AddGroupScreen/AddGroupScreen'
import CustomButton from '../../components/CustomButton'
import SelectUserGroup from '../../components/SelectUserGroup'
import { Divider } from 'react-native-elements'
import { ChatGroup, t, Users } from '../../../assets/data/chatGroup'
import { useAppDispatch } from '../../redux/hook'
import { AddGroupAction } from '../../slice/AddGroupSlice'


const AddingMemberScreen = ({navigation,route}: RootStackScreenProps<'AddingMemberScreen'>) => {
  const [effect,setEffect] = useState(false);
  const CurrentGroup = route.params.id
  const dispatch = useAppDispatch()
  const MemberInCurrentGroup = CurrentGroup?.users.user.map((user)=>{
    return user.username
  })
  useEffect(()=>{

  },[effect])
  
 // console.log('memberInCurrentGroup:',MemberInCurrentGroup)
  const AddingableMember = USERS.filter((user,indexs)=> {
    let check = true
    MemberInCurrentGroup?.map((memberInCurrentGroup,index)=>{

      if(memberInCurrentGroup == user.user){
        check = false
      }
    })
   return check
    
  }
  

)

const defaultUserSelected: UserSelected[] = AddingableMember.map(user => {
  return {
    user: user.user,
    image: user.image,
    selected: false
  }
})
const [usersSelected, setUsersSelected] = useState<UserSelected[]>(defaultUserSelected)

const addMemberHandler = () =>{
  const member = usersSelected.filter((user)=> user.selected == true)
  const usersAdded: t[] = member.map(user=>{
    return {
      username:user.user,
      image:user.image
    }
  })
 // console.log("usersAdded",usersAdded)
  const addDispatch:Users = {
    user:usersAdded,
    num:CurrentGroup?.chat.num
  }
  dispatch(AddGroupAction.addMemberGroup(addDispatch))
  setEffect(!effect)
  navigation.goBack()
}
const handleSeletedUser = ( index: number) => {
  setUsersSelected(users => {
  const cloneUsers = [...users]
  
  cloneUsers[index].selected = !cloneUsers[index].selected
  return cloneUsers
})
}
  return (
    <>
      <View style={{ marginTop: 30 }}>
       
        <CustomButton text="Add Member" type="BLUE"
          onPress={() => { addMemberHandler() }} />


      </View>
      <ScrollView style={{}}>
        {usersSelected.map((user, index) => (

        <TouchableOpacity onPress={() => handleSeletedUser(index)}>
        <SelectUserGroup user={user} />
         </TouchableOpacity>



        ))}
            <Divider width={1} orientation='vertical' style={{marginBottom:5}} />

      </ScrollView>
    </>
  )
}

export default AddingMemberScreen

const styles = StyleSheet.create({})