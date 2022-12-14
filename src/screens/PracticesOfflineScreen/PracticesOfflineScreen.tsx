import { RootStackScreenProps } from '../../type/navigation'

import { LinearGradient } from 'expo-linear-gradient'

import { AntDesign } from '@expo/vector-icons'
import React, { useMemo, useLayoutEffect, useState, } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    useWindowDimensions,
    Image,
    TouchableOpacity,
    Modal,
    ScrollView,
} from "react-native";
import { useAppSelector } from '../../redux/hook';
import { selectCourse } from '../../slice/AddCourseSlice';
import Password from '../../components/Password';
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround';
import { SubjectOffline } from '../../../assets/data/subjectOffline';
let averageRateImage

const gradients = [

    ['#1FA2FF', '#12D8FA', '#A6FFCB'],
    ['#FF512F', '#F09819'],
    [ '#26D0CE','#1A2980'],

    ['#E55D87', '#5FC3E4'],
    ['#6CFF95','#348F50', '#56B4D3'],

]

const PracticesOfflineScreen = ({ route, navigation }: RootStackScreenProps<'PracticesOfflineScreen'>) => {

    const selectedSubject = SubjectOffline.find((subject, index) => subject.name == route.params.id)
    // console.log(route.params.id)
    // console.log(selectedSubject)
    useApplyHeaderWorkaround(navigation.setOptions)
    const WebHandler = () => {
        navigation.navigate("WebScreen",{name:route.params.id})
    }
    //   console.log("RENDER: ",selectedSubject?.courses[3].quiz)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={WebHandler}>
                    <View >
                  <LinearGradient style={{ flexDirection: 'row',height:30,width:120, marginVertical: 5, alignItems: 'center',justifyContent:'center',borderRadius:10 }}
                                        colors={gradients[0]}>
                                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontWeight:'800'}}>WEB Hỗ Trợ </Text>
                                            <Image 
                                            style={{width:20,height:20}}
                                            source={{uri:'https://img.icons8.com/glyph-neue/512/domain.png'}}
                                            />
                                            </View>


                    </LinearGradient>
                    </View>
                </TouchableOpacity>

            ),
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: selectedSubject?.icon }}
                    />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginLeft: 5 }}>{selectedSubject?.name}</Text>
                </View>
            )

        })
    }, [navigation])


    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',


        }}>

            <ImageBackground
                source={{ uri: 'https://raw.githubusercontent.com/notJust-dev/iOSLockScreen/main/assets/images/bg.jpeg' }}
                style={{ width: '100%', height: '100%' }}
            >
                <ScrollView style={{ marginTop: 10 }}>
                    {selectedSubject?.courses.map((course, index) => {
                        const gradient = useMemo(

                            () => gradients[Math.floor(Math.random() * gradients.length)],
                            []
                        )




                        return (
                            <TouchableOpacity onPress={() => {

                                navigation.navigate("QuestionOfflineScreen", { id: course.name })


                            }}

                            >
                                <View>

                                    <LinearGradient style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 5, borderRadius: 15, alignItems: 'center' }}
                                        colors={gradient}>
                                        <Text style={{ color: 'white', marginLeft: 10, marginVertical: 10 }}>{course.name}</Text>




                                        {/* <Image 
                                        source={{uri:averageRateImage}}
                                        style={{width:25,height:25,marginRight:5}}
                                        /> */}
                                        <View style={{marginLeft:'auto',flexDirection:'row',paddingRight:5}}>
                                            <Text>Độ Khó: </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                {
                                                    Array.from(Array(course.hard).keys()).map((els) => {
                                                        return (
                                                            <Image
                                                                source={{ uri: 'https://img.icons8.com/color/512/christmas-star.png' }}
                                                                style={{ width: 20, height: 20 }}
                                                            />
                                                        )
                                                    })}
                                            </View>
                                        </View>






                                    </LinearGradient>


                                </View>
                            </TouchableOpacity>
                        )

                    })}
                </ScrollView>

            </ImageBackground>
            

        </View>
    )
}

export default PracticesOfflineScreen

const styles = StyleSheet.create({})