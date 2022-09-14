import { View, Text, ScrollView ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { USERS } from '../../../assets/data/userStory'
import Colors from '../../constants/Colors'

const Stories = () => {
  return (
    <View style={{marginBottom:13}}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}        
        >
            {USERS.map((story,index)=> (
                
             <View key={index}
             style={styles.storyContainer}
             >
                   <Image 
                source={{uri:story.image}}
                style={styles.story}
                />
                <Text style={styles.storyName}>
                {story.user.length > 11
                ? story.user.slice(0,10).toLowerCase() + '...'
                : story.user.toLowerCase()

                }

                </Text>

             </View>
            
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