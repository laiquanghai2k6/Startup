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
          <AntDesign name="checkcircle" size={24} color="white" style={{ marginLeft: 'auto', marginRight: 5 }} />
        )
          :
          (

            <AntDesign name="checkcircleo" size={24} color="white" style={{ marginLeft: 'auto', marginRight: 5 }} />
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