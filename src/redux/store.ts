import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import newFeedSlice from '../screens/NewFeedScreen/newFeedSlice';
const rootReducer = combineReducers({
    posts: newFeedSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
   
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
