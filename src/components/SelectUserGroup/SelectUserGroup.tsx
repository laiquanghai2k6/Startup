import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import AvatarMessenger from '../MessengerListItem/AvatarMessenger'
import { AntDesign } from '@expo/vector-icons'
import { UserSelected } from '../../screens/AddGroupScreen/AddGroupScreen'

interface SelectUserGroupProps {
  user: UserSelected,
}

const SelectUserGroup = (props: SelectUserGroupProps) => {
  const { user } = props
  // console.log(user)
  return (
    <View style={{ marginVertical: 5, justifyContent: 'center' }}>


      <Divider width={1} orientation='vertical' style={{ marginBottom: 5 }} />
      {/* <ListItem key={index} style={{backgroundColor:'black'}} > */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <View>
          {/* <Divider width={1} orientation='vertical' /> */}
          <Image
            source={{ uri: user.image }}
            style={styles.avatar}


          />

        </View>
        <Text style={{ color: 'white', marginLeft: 10 }}>{user.user}</Text>
        {user.selected ? (
           <Image
          

           source={{ uri: 'https://img.icons8.com/nolan/344/1A6DFF/C822FF/in-progress.png' }}
           style={{ marginLeft: 'auto', marginRight: 5,width:30,height:30 }}


         />
          )
          :
          (

            <Image
            source={{ uri: 'https://img.icons8.com/nolan/344/1A6DFF/C822FF/circle-thin.png' }}
            style={{ marginLeft: 'auto', marginRight: 5,width:30,height:30 }}


          />
          )
        }
      </View>

    </View>
  )
}

export default SelectUserGroup

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    // marginBottom:10,
    // marginTop:10,
    borderRadius: 25
}
})