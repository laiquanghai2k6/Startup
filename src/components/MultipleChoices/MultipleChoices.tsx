import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

interface MultipleChoicesProps extends PressableProps{
    choice:string,
    isSelected?: boolean;
    onPress?: (arg0: string) => void;
}

const MultipleChoices = ({
    choice,
    isSelected = false,
    onPress = () => {},
   
}: MultipleChoicesProps) => {

    return (
        <Pressable
        onPress={() => onPress(choice)}

          style={[styles.container,
          isSelected ? { backgroundColor: Colors.light.yellow } :
            {},
        
          ]}
          >
          <Text style={[styles.text,
          isSelected ? { fontWeight: 'bold',color:'black' } :
            {}
    
          ]}>{choice}</Text>
        </Pressable>
      )
    }
    const styles = StyleSheet.create({
      container: {
        borderWidth: 1,
        borderColor: Colors.light.tabIconDefault,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    
      },
      text: {
        color:'white'
      }
    
    
    })
    export default MultipleChoices