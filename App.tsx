// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import useCachedResources from './src/hooks/useCachedResources';
// import useColorScheme from './src/hooks/useColorScheme';
// import Navigation from './src/navigation';
// import { Amplify } from 'aws-amplify';
// import awsconfig from './src/aws-exports';

// import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native'
// import Colors from './src/constants/Colors';
// import ModuleContextProvider from './src/contexts/ModuleContext'
// import { useEffect } from 'react';
// import { registerForPushNotificationsAsync } from './src/utils/pushNotifications';
// import React from 'react'
// import UserContextProvider from './src/contexts/UserContext';
// import NewPostScreen from './src/screens/NewPostScreen';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
// Amplify.configure({ ...awsconfig });

// function App() {
//   console.reportErrorsAsExceptions = false;
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();



//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <Provider store={store}>
//       <SafeAreaProvider>
//         <UserContextProvider>
//           <ModuleContextProvider>
//             <Navigation colorScheme={colorScheme} />
//           </ModuleContextProvider>
//         </UserContextProvider>
//         <StatusBar />
//       </SafeAreaProvider>
//       </Provider>
//     );
//     // <NewPostScreen />
    
//   }
// }

// const signUpConfig = {
//   hideAllDefaults: true,
//   signUpFields: [

//     {
//       label: 'Email',
//       key: 'username',
//       required: true,
//       displayOrder: 2,
//       type: 'string',
//       placeholder: 'Email',
//     },

//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 4,
//       type: 'password',
//       placeholder: 'Password',
//     },
//   ],
// };

// const customTheme = {
//   ...AmplifyTheme,
//   button: {
//     ...AmplifyTheme.button,
//     backgroundColor: Colors.light.blue,
//     borderRadius: 20,
//   },
//   buttonDisabled: {
//     ...AmplifyTheme.buttonDisabled,
//     backgroundColor: Colors.light.tabIconDefault,
//     borderRadius: 20,
//   },
//   sectionFooterLink: {
//     ...AmplifyTheme.sectionFooterLink,
//     color: Colors.light.blue
//   },
//   background: {
//     ...AmplifyTheme.background,
//     backgroundColors: Colors.light.primary
//   }
// }


// export default withAuthenticator(App, { signUpConfig, theme: customTheme });

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


export default function App() {

  const animatedSensor = useAnimatedSensor(SensorType.ROTATION,{interval:2000});

  const h = useDerivedValue(() =>
    interpolate(
      Math.abs(animatedSensor.sensor.value.pitch),
      [0, halfPi],
      [35, 118],
      Extrapolate.CLAMP,
    ),
  );
  console.log(animatedSensor.sensor.value)

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
    // sao nó k có animation nhỉ
    // k bị crash nữa
    // ơ lại bị crash
    // hay do phiên bản expo
    //giờ cài lại expo mới nhất xem như nào
    // giờ xem nó do svg hay reanimated
  },

});
