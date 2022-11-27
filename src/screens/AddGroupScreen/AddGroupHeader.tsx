import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const AddGroupHeader = ({ navigation }: any) => {

    return (
        <View style={ styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
                  source={{uri:'https://img.icons8.com/nolan/344/ffffff/arrow-pointing-left.png'}}
                  style={{width:35,height:35,marginLeft:10}}
                  />
            </TouchableOpacity>

                <Text style={{color:'white',marginRight:90,fontSize:20,fontWeight:'600'}}>Tạo Nhóm Của Bạn!</Text>


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