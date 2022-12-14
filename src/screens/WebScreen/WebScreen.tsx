import { ImageBackground,  ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../type/navigation'
import { WEB } from '../../../assets/data/web'
import * as Linking from 'expo-linking'
const WebScreen = ({ route, navigation }: RootStackScreenProps<'WebScreen'>) => {


    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={{ uri: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}>
            <ScrollView style={{ marginTop: 40, marginLeft: 20 }}>
                {WEB.map((web, index) => (
                    <View>
                        <Text style={{ color: 'yellow', fontWeight: '800' }}>{web.title}:</Text>
                        <TouchableOpacity onPress={() => { Linking.openURL(web.link)}}>
                            <Text style={{ color: 'white', fontWeight: '800', textDecorationLine: 'underline' }}>{web.link}</Text>
                        </TouchableOpacity>
                    </View>
                ))

                }
            </ScrollView>

        </ImageBackground>
    )
}

export default WebScreen

const styles = StyleSheet.create({})