import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const AddGroupHeader = ({ navigation }: any) => {

    return (
        <View style={ styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>

                <Text style={{color:'white',marginRight:90,fontSize:20,fontWeight:'600'}}>Create your group!</Text>


        </View>
    )
}

export default AddGroupHeader

const styles = StyleSheet.create({
    container:{
         justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    }
})