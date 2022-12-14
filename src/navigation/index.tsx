/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5, AntDesign,Ionicons  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable ,Image} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../../src/screens/NotFoundScreen';
import ModuleScreen from '../../src/screens/ModuleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../type/navigation';
import LinkingConfiguration from './LinkingConfiguration';
import TopicScreen from '../screens/TopicScreen/TopicScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizEndScreen from '../screens/QuizEndScreen';
import NewFeedScreen from '../screens/NewFeedScreen';
import NewPostScreen from '../screens/NewPostScreen';
import SavePostScreen from '../screens/SavePostScreen';
import MessengerScreen from '../screens/MessengerScreen';
import ChannelScreen from '../screens/ChannelScreen';
import AddGroupScreen from '../screens/AddGroupScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import GroupMemberScreen from '../screens/GroupMemberScreen';
import AddingMemberScreen from '../screens/AddingMemberScreen';
import StudyScreen from '../screens/StudyScreen';

import QuestionScreen from '../screens/QuestionScreen';
import PracticesScreen from '../screens/PracticesScreen';
import AddCourseScreen from '../screens/AddCourseScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';
import StudyOfflineScreen from '../screens/StudyOfflineScreen';
import PracticesOfflineScreen from '../screens/PracticesOfflineScreen/PracticesOfflineScreen';
import WebScreen from '../screens/WebScreen';
import QuestionOfflineScreen from '../screens/QuestionOfflineScreen';
import QuizEndOfflineScreen from '../screens/QuizEndOfflineScreen';
import QuestionScreenOffline from '../screens/QuestionOfflineScreen';
import AuthScreen from '../screens/AuthScreen';
import AuthScreenSignUp from '../screens/AuthScreenSignUp';
import { useState,useEffect } from 'react';
import { useAppSelector } from '../redux/hook';
import { selectSignIn } from '../slice/setAuth';
import RankingScreen from '../screens/RankingScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

   const signIn = useAppSelector(selectSignIn)
  console.log("signIn.signin",signIn.signin)
  const handle = () =>{
    if(signIn.signin == 0){
          
      return (<AuthScreen />)
    }else if (signIn.signin == 1){
      return ( <AuthScreenSignUp />)
    }else {
      return (<RootNavigator />)
    }
  }
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       
        {handle()}
        {/* <RootNavigator /> */}
      
      
        
      {/*  */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen
        name="Topic"
        component={TopicScreen}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name="QuizEndScreen"
        component={QuizEndScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
        <Stack.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={{ headerShown:false }}

      />
        <Stack.Screen
        name="SavePostScreen"
        component={SavePostScreen}
        options={{ headerShown:false }}

      />
        <Stack.Screen
        name="ChannelScreen"
        component={ChannelScreen}
        options={{ 
        
        }}
        

      /> 
      <Stack.Screen
      name="AddGroupScreen"
      component={AddGroupScreen}
      options={{ 
        headerShown:false
      }}
      

    />
     <Stack.Screen
      name="GroupChatScreen"
      component={GroupChatScreen}
      options={{ 

      }}
    />
      <Stack.Screen
      name="GroupMemberScreen"
      component={GroupMemberScreen}
      options={{
         
      }}

    />
    

      <Stack.Screen
      name="AddingMemberScreen"
      component={AddingMemberScreen}
      options={{
         title:'Add Member'
      }}

    />
    
     <Stack.Screen
      name="PracticesScreen"
      component={PracticesScreen}
      options={{
        title:'Toán Học'
      }}

    />
     <Stack.Screen
      name="PracticesOfflineScreen"
      component={PracticesOfflineScreen}
      options={{
        title:'Toán Học'
      }}

    />
 
  
      <Stack.Screen
      name="QuestionScreen"
      component={QuestionScreen}
      options={{
       headerShown:false
      }}

    />
      <Stack.Screen
      name="AddCourseScreen"
      component={AddCourseScreen}
      options={{
        title:'Tạo Khóa học'
      }}

    />
       <Stack.Screen
      name="OthersProfileScreen"
      component={OthersProfileScreen}
      options={{
       headerShown:false

      }}

    />
      <Stack.Screen
      name="WebScreen"
      component={WebScreen}
      options={{
       headerShown:false

      }}

    />
 <Stack.Screen
      name="QuizEndOfflineScreen"
      component={QuizEndOfflineScreen}
      options={{
       headerShown:false

      }}

    />
    <Stack.Screen
      name="QuestionOfflineScreen"
      component={QuestionOfflineScreen}
      options={{
       headerShown:false

      }}

    />
    <Stack.Screen
      name="AuthScreen"
      component={AuthScreen}
      options={{
       headerShown:false

      }}

    />
    <Stack.Screen
      name="AuthScreenSignUp"
      component={AuthScreenSignUp}
      options={{
       headerShown:false

      }}

    />
   
      

    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  
  return (
    <BottomTab.Navigator
      initialRouteName="NewFeed"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        
      }}>
         <BottomTab.Screen
        name="NewFeed"
        component={NewFeedScreen}
        options={{
          title: 'Bảng Tin',
          headerShown:false,
          tabBarIcon: ({ color }) =>
           <Image 
          source={{uri:'https://img.icons8.com/nolan/344/earth-planet.png'}}
          style={{width:32,height:32}}
          />,
        }}
      />
          {/* <BottomTab.Screen
        name="Messenger"
        component={MessengerScreen}
        options={{
          title: 'Trò Chuyện',
          headerShown:false,
          tabBarIcon: ({ color }) => 
          <Image 
          source={{uri:'https://img.icons8.com/nolan/344/topic.png'}}
          style={{width:32,height:32}}
          />,
        }}
      /> */}
      <BottomTab.Screen
        name="Study"
        component={StudyScreen}
        options={{
          headerShown:false,
          title:'Học Online',
          
        
          tabBarIcon: ({ color }) => 
            <Image 
            source={{uri:'https://img.icons8.com/nolan/344/saving-book.png'}}
            style={{width:32,height:32}}
            />,

          
        }}
      />
         <BottomTab.Screen
        name="StudyOffline"
        component={StudyOfflineScreen}
        options={{
          headerShown:false,
          title: 'Học Offline',
          tabBarIcon: ({ color }) => 
          <Image 
          source={{uri:'https://img.icons8.com/nolan/512/open-book.png'}}
          style={{width:32,height:32}}
          />,
        }}
      />
       
       <BottomTab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          headerShown:false,
          
          title: 'Xếp Hạng',
          
          tabBarIcon: ({ color }) => 
          <Image 
          source={{uri:'https://img.icons8.com/nolan/512/prize.png'}}
          style={{width:32,height:32}}
          />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown:false,
          
          title: 'Cá Nhân',
          
          tabBarIcon: ({ color }) => 
          <Image 
          source={{uri:'https://img.icons8.com/nolan/344/gender-neutral-user.png'}}
          style={{width:32,height:32}}
          />,
        }}
      />
     
     
     
     
    </BottomTab.Navigator>
  );
}

