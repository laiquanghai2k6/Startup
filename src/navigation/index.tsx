/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../../src/screens/NotFoundScreen';
import ModuleScreen from '../../src/screens/ModuleScreen';
import ProfileScreen from '../../src/screens/ProfileScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../type/navigation';
import LinkingConfiguration from './LinkingConfiguration';
import TopicScreen from '../screens/TopicScreen/TopicScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizEndScreen from '../screens/QuizEndScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
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
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
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
      initialRouteName="Module"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,

      }}>
      <BottomTab.Screen
        name="Module"
        component={ModuleScreen}
        options={{
          title: 'JS 101',
          
          tabBarIcon: ({ color }) => (<AntDesign name="book" size={24} color={color} />

          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

