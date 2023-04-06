import { View, Text, ScrollView ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { USERS } from '../../../assets/data/userStory'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useAppSelector } from '../../redux/hook'
import { selectUserName } from '../../slice/setUser'
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround'
const ngrok = 'https://a3f0-2001-ee0-481c-e00-54cd-1af7-4f93-9cf8.ap.ngrok.io'


const Stories = () => {
    const navigation = useNavigation();
  
   
    const user = useAppSelector(selectUserName)
    const allUser = user.allUser
    const Press = (name:string)=> {
        navigation.navigate("OthersProfileScreen",{name:name})
    }
  useApplyHeaderWorkaround(navigation.setOptions)
    
  return (
    <View style={{marginBottom:13}}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}        
        >
            {allUser.map((story,index)=> (
            <TouchableOpacity onPress={()=>{Press(story.id)}}>
             <View key={index}
             style={styles.storyContainer}
             >
                   <Image 
                source={{uri:story.image == "iddefault.webp" ? "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg" : ngrok+'/i/'+story.image}}
                style={styles.story}
                />
                <Text style={styles.storyName}>
                {story.name.length > 11
                ? story.name.slice(0,10)+ '...'
                : story.name

                }

                </Text>

             </View>
             </TouchableOpacity>
            
            ))}

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    storyContainer:{
        alignItems:'center',
        marginLeft:3
    },
    story:{
        width:70,
        height:70,
        borderRadius:50,
        
        borderWidth:3,
        borderColor:'#FFEECC'
    },
    storyName:{
        color:'white',
        
       
    }
})


export default Stories