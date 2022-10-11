import { StyleSheet, Text, View ,Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import Colors from '../../constants/Colors'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { AddGroupAction, selectGroup } from '../../slice/AddGroupSlice'

const GroupMemberScreen = ({navigation,route}: RootStackScreenProps<'GroupMemberScreen'>) => {
    
    const groupSelected = route.params.id
    const GROUPS = useAppSelector(selectGroup)
    const GROUP = GROUPS.find((group)=> group.groupName == groupSelected)
    const dispatch = useAppDispatch()
    //console.log(GROUP)
    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Members",
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100 }}>
              <TouchableOpacity onPress={AddMember}>
               <Text style={{color:'#3a88dc'}}>Add Member</Text>
              </TouchableOpacity>
    
            </View>
          )
        });
      }, [navigation])
      const AddMember = () =>{
        navigation.navigate("AddingMemberScreen",{id:GROUP})
      }
      const DeleteMember = (props: string) =>{
        
        const addDispatch = {
          num:GROUP?.users.num,
          user:[{
          username: props,
          image:
              'https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/305679167_815783129436784_2325906925667072052_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QzLT8m6iavEAX96bVbH&_nc_ht=scontent.fhph2-1.fna&oh=03_AVKyYXYjhb072tKdojoYZ-4aluP5ao4GkT3bYTr_c9lGFg&oe=6343038A',  
      }]
    }
    
        dispatch(AddGroupAction.deleteMemberGroup(addDispatch))
      }
  return (
    <ScrollView style={{flex:1}}>
        {GROUP!= undefined && GROUP.users.user.map((group,index)=>(
            <View key={index} style={{
                flexDirection:'row',
                // alignContent:'center',
                alignItems:'center',
                marginLeft:20,
                marginVertical:10
                }}>
                <View>
                <Image 
                source={{uri: GROUP!=undefined ? group.image : ''}}
                style={styles.avatar}
                />
                </View>
                <Text style={{color:'white',marginLeft:15,fontWeight:'800',fontSize:16}}>{group.username}</Text>
                <TouchableOpacity style={{marginLeft:'auto'}} onPress={()=> DeleteMember(group.username)}>
               <Text style={{color:'#3a88dc'}}>Delete</Text>

                </TouchableOpacity>
            </View>

        ))}
    </ScrollView>
  )
}

export default GroupMemberScreen

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        // marginBottom:10,
        // marginTop:10,
        borderRadius: 25
    }
})