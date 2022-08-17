import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';

import {withAuthenticator,AmplifyTheme} from 'aws-amplify-react-native'
import Colors from './src/constants/Colors';

Amplify.configure({...awsconfig,Analytics:{disabled:true}});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const signUpConfig = {
  hideAllDefaults:true,
  signUpFields:[
   
    {
      label:'Email',
      key:'username',
      required:true,
      displayOrder:2,
      type:'string',
      placeholder:'Email',
    },
   
    {
      label:'Password',
      key:'password',
      required:true,
      displayOrder:4,
      type:'password',
      placeholder:'Password',
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button:{
    ...AmplifyTheme.button,
    backgroundColor: Colors.light.blue,
    borderRadius:20,
  },
  buttonDisabled:{
    ...AmplifyTheme.buttonDisabled,
    backgroundColor:Colors.light.tabIconDefault,
    borderRadius:20,
  },
  sectionFooterLink:{
    ...AmplifyTheme.sectionFooterLink,
    color:Colors.light.blue
  },
  background:{
    ...AmplifyTheme.background,
    backgroundColors:Colors.light.primary
  }
}


export default withAuthenticator(App, {signUpConfig,theme:customTheme});
