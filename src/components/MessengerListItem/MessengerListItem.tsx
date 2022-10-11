import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Divider, ListItem } from 'react-native-elements'
import { USERS } from '../../../assets/data/userStory'
import AvatarMessenger from './AvatarMessenger'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { selectMessenger } from '../../slice/MessengerSlice'
import { CHATSGROUP } from '../../../assets/data/chatGroup'
import { selectGroup } from '../../slice/AddGroupSlice'

const MessengerListItem = () => {
    const navigation = useNavigation()
    const chat = useAppSelector(selectMessenger)
    const groupChat = useAppSelector(selectGroup)

    return (
        <View>
            {groupChat.map((chatGroup,index)=>{
                if(groupChat.length == 0)
                return null
                else return (
                    <TouchableOpacity onPress={() => {
                       navigation.navigate("GroupChatScreen",{id:chatGroup.groupName})
                    }}>
                        <Divider width={1} orientation='vertical' />
                        <ListItem key={index}  >

                            <View>
                                {/* <Divider width={1} orientation='vertical' /> */}
                                <Image
                                    source={{ uri: chatGroup.groupImage }}
                                    style={styles.avatar}
                                />
                            </View>
                            <ListItem.Content>
                                <ListItem.Title style={{ fontWeight: '800' }}>
                                    {chatGroup.groupName}
                                </ListItem.Title>
                                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                                    {
                                        chatGroup.chat.mes.map((grChat, index) => {
                                            if (chatGroup.chat.mes.length-1 == index) {
                                                if(chatGroup.chat.mes[chatGroup.chat.mes.length-1].type == "image")
                                                {
                                                    return(
                                                        "SEND AN IMAGE!"
                                                    )
                                                }else{
                                                return (
                                                    grChat.message
                                                )
                                                }
                                            }
                                        }
                                        )
                                    }
                                </ListItem.Subtitle>
                            </ListItem.Content>




                        </ListItem>
                    </TouchableOpacity>
                )
            })}

            {USERS.map((user, index) => (
                <View key={index} >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("ChannelScreen", { id: user.user })
                    }}>

                        <Divider width={1} orientation='vertical' />
                        <ListItem key={index}  >

                            <View>
                                {/* <Divider width={1} orientation='vertical' /> */}
                                <Image
                                    source={{ uri: user.image }}
                                    style={styles.avatar}
                                />
                            </View>
                            <ListItem.Content>
                                <ListItem.Title style={{ fontWeight: '800' }}>
                                    {user.user}
                                </ListItem.Title>
                                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                                    {
                                        chat.map((chats, index) => {
                                            if (chats.num === user.chat.num) {
                                                if(chats.mes[chats.mes.length - 1].type == "image" ){
                                                    return (
                                                        "Send an image!"
                                                    )

                                                }
                                                else{
                                                return (
                                                    chats.mes[chats.mes.length - 1].message
                                                    // index
                                                )
                                                }
                                            }
                                        }
                                        )
                                    }
                                </ListItem.Subtitle>
                            </ListItem.Content>




                        </ListItem>
                    </TouchableOpacity>
                </View>
            ))}
        </View>

    )
}

export default MessengerListItem

const styles = StyleSheet.create({
    ListItem: {
        backgroundColor: 'red',


    },
    avatar: {
        width: 50,
        height: 50,
        // marginBottom:10,
        // marginTop:10,
        borderRadius: 25
    }
})