import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';





const initialState = {
    subject: [],
    course:[],
    quiz:[],
    test:0,
}





export const setStudy = createSlice({
    name: 'study',
    reducers: {
        setStudy: (state, action: PayloadAction<Array<Object>>) => {
            
            state.subject = action.payload
         return state
        },
        setCourse: (state, action: PayloadAction<Array<Object>>) => {
            
            state.course = action.payload
         return state
        },
        setQuiz:(state, action: PayloadAction<Array<Object>>) => {
            
            state.quiz = action.payload
         return state
        },
        setTest:(state, action: PayloadAction<number>) => {
            
            state.test += action.payload
         return state
        },
        setNextCourse: (state, action: PayloadAction<Object>) => {
            
            state.course.push(action.payload)
         return state
        },
      
    },
    initialState
})
export const SetStudyAction = setStudy.actions;
export const selectStudy = (state: RootState) => state.setStudy
export default setStudy.reducer