import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';
import { COURSE, RATE, RATE_PAYLOAD, SUBJECT, Subject } from '../../assets/data/subject';


const initialState = {
    subject: Subject,
}





export const AddCourseSlice = createSlice({
    name: 'addCourse',
    reducers: {
        addCourse: (state, action: PayloadAction<COURSE>) => {
            const indexCourseUpdate = state.subject.findIndex(subject=> subject.id === action.payload.type )
            console.log("INDEX UPDATE:",indexCourseUpdate)
            state.subject[indexCourseUpdate].courses.push(action.payload)
            
            
            
         return state
        },
        addSubmitCourse: (state, action: PayloadAction<RATE_PAYLOAD>) => {
            const indexSubjectUpdate = state.subject.findIndex(subject=> subject.id === action.payload.idSubject )
            const indexCourseUpdate = state.subject[indexSubjectUpdate].courses.findIndex(course => course.name == action.payload.idCourse)

            state.subject[indexSubjectUpdate].courses[indexCourseUpdate].rate.totalRateScore += action.payload.TotalRateScore
            state.subject[indexSubjectUpdate].courses[indexCourseUpdate].rate.totalLearned += 1

            
            
            
         return state
        },
    },
    initialState
})
export const addCourseAction = AddCourseSlice.actions;
export const selectCourse = (state: RootState) => state.addCourse.subject
export default AddCourseSlice.reducer