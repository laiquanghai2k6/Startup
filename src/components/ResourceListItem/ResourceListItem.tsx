import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ResourceItem } from '../../type/models'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons'; 
interface ResourceListItemProps {
  resource: ResourceItem;
  index: number;
  isLast?: boolean;
}


const ResourceListItem = ({ resource, index }: ResourceListItemProps) => {
  const onPress = ()=>{
    WebBrowser.openBrowserAsync(resource.url);
  }
  
  return (
    <Pressable onPress={onPress} style={styles.container}>
      
      <View style={[styles.indexContainer,resource.completed?styles.completed : {}
      
      ]}>
       {resource.completed ? (
       <FontAwesome name="check" size={20} color="black" />
       ) :(
         <Text>{index + 1}</Text>
        )
       }
      </View>
      <Text style={{ color: 'black' }}>{resource.title}</Text>
      <Entypo
        name="open-book"
        size={24}
        color="black"
        style={styles.icon}
      />

<View style={[styles.lineIndicator,
  
  {backgroundColor: resource.completed ? Colors.light.primary : Colors.light.darkL}]}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
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
    height:'40%',
    width:2,
    left:15,
    top:30,
    backgroundColor:Colors.light.primary
  }

})

export default ResourceListItem