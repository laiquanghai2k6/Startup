import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'
import { useNavigation } from '@react-navigation/native'

const AddNewPost = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation}/>
        </View>
  )
}

const Header = ({navigation}: any) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }}
                    style={{ width: 30, height: 30, }}
                />

            </TouchableOpacity>
            <Text style={styles.headerText}>New Post</Text>
            <Text></Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        marginHorizontal: 10,
    },
    headerContainer: {
        marginTop: 13,
      
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText:{
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginRight:25,
    }

})

export default AddNewPost