import { RootStackScreenProps } from '../../type/navigation'

import { LinearGradient } from 'expo-linear-gradient'

import { AntDesign } from '@expo/vector-icons'
import React, { useMemo, useLayoutEffect, useState, useEffect, } from "react";
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
    RefreshControl,
} from "react-native";
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { selectCourse } from '../../slice/AddCourseSlice';
import Password from '../../components/Password';
import useApplyHeaderWorkaround from '../../hooks/useApplyHeaderWorkaround';
import axios from 'axios';
import { selectStudy, SetStudyAction } from '../../slice/setStudy';
let averageRateImage

const gradients = [
    ['#00C9FF', '#92FE9D'],

    ['#4CB8c4', '#3CD3AD'],
    ['#1FA2FF', '#12D8FA', '#A6FFCB'],
    ['#FF512F', '#F09819'],
    ['#1A2980', '#26D0CE'],

    ['#F09819', '#EDDE5D'],
    ['#E55D87', '#5FC3E4'],
    ['#348F50', '#56B4D3'],

]

const PracticesScreen = ({ route, navigation }: RootStackScreenProps<'PracticesScreen'>) => {
    // const Subject = useAppSelector(selectCourse)


    const [isModalVisible, setIsModalVisible] = useState(false)
    const [password, setPassword] = useState("")
    const [courseId, setCourseId] = useState("")




    
    useApplyHeaderWorkaround(navigation.setOptions)
    const study = useAppSelector(selectStudy)
    console.log("STUDY:",study.course)
    const selectedSubjects = study.subject.find((subject, index) => subject.subjectId == route.params.id)
    const courses = study.course.filter((course, index) => course.subjectId == route.params.id)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={AddCourse}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/android/344/ffffff/plus.png' }}
                        style={{ width: 26, height: 26 }}

                    />
                </TouchableOpacity>

            ),
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: selectedSubjects?.icon }}
                    />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginLeft: 5 }}>{selectedSubjects?.subjectName}</Text>
                </View>
            )

        })
    }, [navigation])

    const AddCourse = () => {
        navigation.navigate("AddCourseScreen", { id: selectedSubjects?.subjectId })

    }
   
   
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',


        }}>

            <ImageBackground
                source={{ uri: 'https://raw.githubusercontent.com/notJust-dev/iOSLockScreen/main/assets/images/bg.jpeg' }}
                style={{ width: '100%', height: '100%' }}
            >
                <ScrollView
                

                >

                    <View style={{ marginTop: 10 }}>
                        {courses.map((course, index) => {
                            const classes = "(" + course.classes + ")"
                            const gradient = useMemo(

                                () => gradients[Math.floor(Math.random() * gradients.length)],
                                []
                            )

                            let rateScore
                            if (course.totalLearned != 0) {
                                rateScore = (course.totalRateScore) / (course.totalLearned)

                            } else {
                                rateScore = 0
                            }

                            console.log("rateScore", rateScore)
                            if (rateScore > 0 && rateScore <= 1) {
                                averageRateImage = 'https://img.icons8.com/emoji/512/anguished-face.png'
                            } else if (rateScore > 1 && rateScore <= 2) {
                                averageRateImage = 'https://img.icons8.com/emoji/512/worried-face.png'
                            } else if (rateScore > 2 && rateScore <= 3) {
                                averageRateImage = 'https://img.icons8.com/emoji/512/slightly-smiling-face.png'
                            } else if (rateScore > 3 && rateScore <= 4) {
                                averageRateImage = 'https://img.icons8.com/emoji/512/grinning-face-emoji.png'
                            } else {
                                averageRateImage = 'https://img.icons8.com/emoji/512/grinning-face-with-smiling-eyes--v2.png'
                            }
                            return (
                                <TouchableOpacity onPress={() => {
                                    if (course.password == "") {
                                        navigation.navigate("QuestionScreen", { id: course.courseId })
                                    } else {
                                        setPassword(course.password)
                                        setCourseId(course.courseId)
                                        setIsModalVisible(!isModalVisible)
                                    }

                                }}

                                >
                                    <View>

                                        <LinearGradient style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 5, borderRadius: 15, alignItems: 'center' }}
                                            colors={gradient}>
                                            <Text style={{ color: 'white', marginLeft: 10, marginVertical: 10 }}>{course.courseName} {classes}</Text>

                                            <Text style={{ marginLeft: 'auto', marginRight: 10, }}>của {course.created.length > 11 ? course.created.slice(0,10) +"..." : course.created }</Text>

                                            {course.totalLearned == 0 ? (
                                                <></>
                                            ) : (
                                                <Image
                                                    source={{ uri: averageRateImage }}
                                                    style={{ width: 25, height: 25, marginRight: 5 }}
                                                />
                                            )}
                                            {course.password != "" ? (
                                                <Image
                                                    source={{ uri: 'https://img.icons8.com/ios-filled/344/FAB505/lock.png' }}
                                                    style={{ width: 25, height: 25, marginRight: 5 }}
                                                />
                                            ) : (
                                                <></>
                                            )}

                                        </LinearGradient>


                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        onRequestClose={() => setIsModalVisible(false)}




                    >
                        <Password password={password} courseName={courseId} />
                    </Modal>
                </ScrollView>
            </ImageBackground>

        </View>
    )
}

export default PracticesScreen

const styles = StyleSheet.create({})