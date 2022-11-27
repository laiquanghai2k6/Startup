import  setStudy  from './../slice/setStudy';
import  AddCourseSlice  from './../slice/AddCourseSlice';
import MessengerSlice  from '../slice/MessengerSlice';
import { savePost } from './../../assets/data/savePost';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import newFeedSlice from '../slice/newFeedSlice';
import savePostSlice from '../slice/savePostSlice';
import  AddGroupSlice  from '../slice/AddGroupSlice';
import ScoreSlice from '../slice/ScoreSlice';
import setAuth from '../slice/setAuth';
import setUser from '../slice/setUser';
import setPost from '../slice/setPost';
import updatePost from '../slice/updatePost';

const rootReducer = combineReducers({
    posts: newFeedSlice,
    savePost:savePostSlice,
    messenger:MessengerSlice,
    addGroup:AddGroupSlice,
    score:ScoreSlice,
    addCourse:AddCourseSlice,
    setSignIn:setAuth,
    setUser:setUser,
    setPost:setPost,
    setUpdatePost:updatePost,
    setStudy:setStudy
    // updateComment:updateComment
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
   
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
