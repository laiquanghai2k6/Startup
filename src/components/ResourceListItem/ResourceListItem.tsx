import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Exercise, Resource } from '../../models'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons'; 
interface ResourceListItemProps {
  resource: Resource;
  index: number;
  isLast?: boolean;
  isCompleted?: boolean;
  onComplete?: (resource: Resource | Exercise) => void;
}


const ResourceListItem = ({ 
  resource, 
  index ,
  isLast,
  isCompleted = false,
  onComplete = () => {

  }
}: ResourceListItemProps) => {
  const onPress = ()=>{
    // if(resource.url){
    // WebBrowser.openBrowserAsync(resource.url);
    // }
    onComplete(resource)
  }
  
  return (
    <Pressable onPress={onPress} style={styles.container}>
      
      <View style={[styles.indexContainer
      ,
      isCompleted?styles.completed : {}
      
      ]}>
       {isCompleted ? (
       <FontAwesome name="check" size={20} color="black" />
       ) :(
         <Text>{index + 1}</Text>
        )
       }
       
      </View>
      <Text style={{ color: 'black' }}>{resource.title}</Text>
      { resource.url && (<Entypo
        name="open-book"
        size={24}
        color="black"
        style={styles.icon}
      />
      )}
  {!isLast && (
    <View style={[styles.lineIndicator,
      
        {
         backgroundColor: isCompleted
         ? Colors.light.primary : Colors.light.darkL
          // backgroundColor:Colors.light.darkL
        
        }]}/>
      )}
      </Pressable>
      )
      
    }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },
  completed:{
    backgroundColor:Colors.light.primary,
    borderColor: Colors.light.primary,
    
  },
  indexContainer: {
    width: 30,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: Colors.light.darkL,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    marginRight: 5
  },
  icon:{
    marginLeft:'auto'
  },
  lineIndicator:{
    position:'absolute',
    height:'70%',
    width:2,
    left:15,
    top:30,
    backgroundColor:Colors.light.primary
  }

})

export default ResourceListItem