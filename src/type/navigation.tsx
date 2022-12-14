/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NumberLocale } from 'yup/lib/locale';
import { ChatGroup } from '../../assets/data/chatGroup';
import { POSTS } from '../../assets/data/post';
import { SUBJECT } from '../../assets/data/subject';
import { USERS } from '../../assets/data/userStory'


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Topic: {id: string};
  Quiz: {id: string};
  QuizEndScreen: {nofQuestions:number; nofCorrectAnswer:number,idCourse:string};
  NewPostScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  SavePostScreen: NavigatorScreenParams<RootTabParamList> | undefined;
  ChannelScreen: {id: string}
  AddGroupScreen:NavigatorScreenParams<RootTabParamList> | undefined;
  GroupChatScreen: {id:string};
  GroupMemberScreen: {id:string };
  AddingMemberScreen:{id:ChatGroup | undefined};
  PracticesScreen:{id:string};
  PracticesOfflineScreen:{id:string};

  QuestionScreen:{id:string};
  QuestionOfflineScreen:{id:string};
  QuizEndOfflineScreen: {nofQuestions:number; nofCorrectAnswer:number};

  AddCourseScreen:{id:string };
  OthersProfileScreen:{name:string};
  WebScreen:{name:string};
  AuthScreen:NavigatorScreenParams<RootTabParamList> | undefined;
  AuthScreenSignUp:NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;



export type RootTabParamList = {
  Module: undefined;
  Profile: undefined;
  NewFeed:undefined;
  Messenger:undefined;
  Study:undefined;
  StudyOffline:undefined;
  Auth:undefined;
  Ranking:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
