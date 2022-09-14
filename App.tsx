import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native'
import Colors from './src/constants/Colors';
import ModuleContextProvider from './src/contexts/ModuleContext'
import { useEffect } from 'react';
import { registerForPushNotificationsAsync } from './src/utils/pushNotifications';
import React from 'react'
import UserContextProvider from './src/contexts/UserContext';
import NewPostScreen from './src/screens/NewPostScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
Amplify.configure({ ...awsconfig });

function App() {
  console.reportErrorsAsExceptions = false;
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <SafeAreaProvider>
        <UserContextProvider>
          <ModuleContextProvider>
            <Navigation colorScheme={colorScheme} />
          </ModuleContextProvider>
        </UserContextProvider>
        <StatusBar />
      </SafeAreaProvider>
      </Provider>
    );
    // <NewPostScreen />
    
  }
}

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [

    {
      label: 'Email',
      key: 'username',
      required: true,
      displayOrder: 2,
      type: 'string',
      placeholder: 'Email',
    },

    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
      placeholder: 'Password',
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: Colors.light.blue,
    borderRadius: 20,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: Colors.light.tabIconDefault,
    borderRadius: 20,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: Colors.light.blue
  },
  background: {
    ...AmplifyTheme.background,
    backgroundColors: Colors.light.primary
  }
}


export default withAuthenticator(App, { signUpConfig, theme: customTheme });
