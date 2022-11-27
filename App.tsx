import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native'
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { Amplify, I18n } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native'
import Colors from './src/constants/Colors';
import ModuleContextProvider from './src/contexts/ModuleContext'
import React, { useEffect } from 'react'
import UserContextProvider from './src/contexts/UserContext';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import AuthScreen from './src/screens/AuthScreen';
import AuthScreenSignUp from './src/screens/AuthScreenSignUp';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from './src/redux/hook';
import { selectPost, SetPostAction } from './src/slice/setPost';
import axios from 'axios';


function App() {

  console.reportErrorsAsExceptions = false;
  const isLoadingComplete = useCachedResources();


  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>

          <StatusBar />
          <Navigation colorScheme={'dark'} />

          {/* <UserContextProvider> */}
          {/* <ModuleContextProvider> */}
          {/*  */}
          {/* </ModuleContextProvider> */}
          {/* </UserContextProvider> */}
          {/* <StatusBar /> */}


          {/*  */}

        </SafeAreaProvider>
      </Provider>
    );
    // <NewPostScreen />

  }
}

// const signUpConfig = {
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: 'Tài khoản Email',
//       key: 'username',
//       required: true,
//       displayOrder: 2,
//       type: 'string',
//       placeholder: 'Email',
//     },
//     {
//       label: 'Mật khẩu',
//       key: 'password',
//       required: true,
//       displayOrder: 4,
//       type: 'password',
//       placeholder: 'Mật khẩu',
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
export default App