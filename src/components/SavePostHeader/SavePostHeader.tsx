import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const NewFeedHeader = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
       <TouchableOpacity>
        <Image 
            style={styles.logo}
            source={require('../../../assets/images/NewFeedName.png')}
        />
       </TouchableOpacity>  
                  
              
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>

                <Image
                    style={styles.icon}
                    source={require('../../../assets/images/NewFeedIconChat.png')}
                />
            </TouchableOpacity>
        </View>

   
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,

    },
    iconsContainer:{
        flexDirection:'row'
    },
    logo:{
        marginTop:20,
        width:100,
        height:50,
        resizeMode:'contain',
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        marginTop:20,
        resizeMode:'contain'
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        marginTop:20,
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600',
    }

})

export default NewFeedHeader