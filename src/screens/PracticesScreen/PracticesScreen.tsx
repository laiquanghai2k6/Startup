import { RootStackScreenProps } from '../../type/navigation'
import { Subject } from '../../../assets/data/subject'

import { LinearGradient } from 'expo-linear-gradient'

import { AntDesign } from '@expo/vector-icons'
import React,{  useMemo,useLayoutEffect, } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";

import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
  SlideInDown,
  SlideInUp,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  useAnimatedGestureHandler,
  withTiming,
  Easing,
  useAnimatedProps,
  useAnimatedSensor,
  SensorType,
} from "react-native-reanimated";

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
    const [gradientIndex, setGradientIndex] = React.useState(0);
    const selectedSubject = Subject.find((subject, index) => subject.name == route.params.id)
    // useApplyHeaderWorkaround(navigation.setOptions)
    const AddCourse = () => {
        navigation.navigate("AddCourseScreen")

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AntDesign name="plus" size={24} color="white" onPress={AddCourse} />
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
                {selectedSubject?.courses.map((course, index) => {
                    const gradient = useMemo(

                        () => gradients[Math.floor(Math.random() * gradients.length)],
                        []
                    )
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("QuestionScreen", { id: course.name })
                        }}>
                            <View>
                               
                                <LinearGradient style={{ flexDirection: 'row',marginHorizontal:20,marginVertical:5 ,borderRadius:15,alignItems:'center'}}
                                    colors={gradient}>
                                    <Text style={{ color: 'white', marginLeft: 10, marginVertical: 10 }}>{course.name}</Text>

                                    <Text style={{ marginLeft: 'auto', marginRight: 10, }}>by {course.created}</Text>

                                </LinearGradient>
                              

                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ImageBackground>
           
        </View>
    )
}

export default PracticesScreen

const styles = StyleSheet.create({})