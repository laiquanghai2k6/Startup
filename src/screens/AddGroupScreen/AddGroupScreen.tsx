import { GestureResponderEvent, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import AddGroupHeader from './AddGroupHeader'
import { useNavigation } from '@react-navigation/native'
import { USERS } from '../../../assets/data/userStory'
import { Divider, ListItem } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 
import AvatarMessenger from '../../components/MessengerListItem/AvatarMessenger'
import SelectUserGroup from '../../components/SelectUserGroup'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { ChatGroup, t } from '../../../assets/data/chatGroup'
import { setIn } from 'formik'
import { AddGroupAction, selectGroup } from '../../slice/AddGroupSlice'
import { ChatGroupType } from '../../slice/MessengerSlice'

// let selected = [
//   false,
//   false,
//   false,
//   false,
//   false,
// ]
export interface UserSelected {
  user: string,
  selected: boolean,
  image: string
}
export interface UserAdded{
  user: string,
  image: string
}

const defaultUserSelected: UserSelected[] = USERS.map(user => {
  return {
    user: user.user,
    image: user.image,
    selected: false
  }
})

const AddGroupScreen = () => {
  const navigation = useNavigation()
  const [groupNameInput, setGroupNameInput] = useState("")
  const [usersSelected, setUsersSelected] = useState<UserSelected[]>(defaultUserSelected)
  const dispatch = useAppDispatch()
  const groupChat = useAppSelector(selectGroup)
  const handleSeletedUser = ( index: number) => {
      setUsersSelected(users => {
      const cloneUsers = [...users]
      
      cloneUsers[index].selected = !cloneUsers[index].selected
      return cloneUsers
    })
  }
  const addMemberHandler = () =>{
    const member = usersSelected.filter((user)=> user.selected == true)
    const usersAdded: t[] = member.map(user=>{
      return {
        username:user.user,
        image:user.image
      }
    })
    const addDispatch:ChatGroup = {
      groupName:groupNameInput,
      groupImage:
      'https://th.bing.com/th/id/R.2686450d080d614919a11f03938ae3d6?rik=s9ZY%2bZhzxJ4wZw&pid=ImgRaw&r=0',
      users:{
        num:groupChat.length + 1,
        user:
        usersAdded
      },
      chat: {
        num:groupChat.length + 1,
        mes:[]
      }
    }
    dispatch(AddGroupAction.addGroup(addDispatch))

    navigation.goBack()
  }
  return (
    <>
      <View style={{ marginTop: 30 }}>
        <AddGroupHeader navigation={navigation} />
        <TextInput
          placeholder='Name your Group'
          style={styles.textInput}
          value={groupNameInput}
          onChangeText={(text) => setGroupNameInput(text)}


        />
        <CustomButton text="Add Member" type="BLUE"
          onPress={() => { addMemberHandler() }} />


      </View>
      <ScrollView style={{}}>
        {usersSelected.map((user, index) => (

        <TouchableOpacity onPress={() => handleSeletedUser( index)}>
        <SelectUserGroup user={user} />
         </TouchableOpacity>



        ))}
            <Divider width={1} orientation='vertical' style={{marginBottom:5}} />

      </ScrollView>
    </>

  )
}

export default AddGroupScreen

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 20,
    width: 320,
    backgroundColor: 'white',
    height: 40,
    marginHorizontal: 20
  }
})