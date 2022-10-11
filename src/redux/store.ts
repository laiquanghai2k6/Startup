import MessengerSlice  from '../slice/MessengerSlice';
import { savePost } from './../../assets/data/savePost';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import newFeedSlice from '../slice/newFeedSlice';
import savePostSlice from '../slice/savePostSlice';
import  AddGroupSlice  from '../slice/AddGroupSlice';
import ScoreSlice from '../slice/ScoreSlice';

const rootReducer = combineReducers({
    posts: newFeedSlice,
    savePost:savePostSlice,
    messenger:MessengerSlice,
    addGroup:AddGroupSlice,
    score:ScoreSlice
    // comments: commentSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
   
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
