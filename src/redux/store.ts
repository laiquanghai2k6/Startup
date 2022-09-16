import { savePost } from './../../assets/data/savePost';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import newFeedSlice from '../screens/NewFeedScreen/newFeedSlice';
import savePostSlice from '../screens/SavePostScreen/savePostSlice';

const rootReducer = combineReducers({
    posts: newFeedSlice,
    savePost:savePostSlice
    // comments: commentSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
   
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
