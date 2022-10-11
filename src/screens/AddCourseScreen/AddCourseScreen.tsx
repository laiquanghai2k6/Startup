import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Animated, {
  Extrapolate,
  interpolate,
  SensorType,
  useAnimatedProps,
  useAnimatedSensor,
  useDerivedValue,
} from 'react-native-reanimated';
import Svg, {Rect, Path, Line} from 'react-native-svg';


const halfPi =1.8;


const AnimatedLine = Animated.createAnimatedComponent(Line);


const AddCourseScreen = () =>{

  const animatedSensor = useAnimatedSensor(SensorType.ROTATION);

  const h = useDerivedValue(() =>
    interpolate(
      Math.abs(animatedSensor.sensor.value.pitch),
      [0, halfPi],
      [35, 118],
      Extrapolate.CLAMP,
    ),
  );

  const animatedLineProps = useAnimatedProps(() => ({
    y1: h.value,
    y2: h.value,
  }));

  return (
      <Svg height="100%" width="100%" viewBox="0 0 148 149" fill="none">
        <AnimatedLine
          animatedProps={animatedLineProps}
          x1="25.9684"
          x2="120.018"
          stroke="#55D688"
          strokeWidth="4.61505"
          strokeLinecap="round"
        />
       
      </Svg>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});

export default AddCourseScreen