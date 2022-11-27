import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';


export interface REALUSER{
    user:string,
    id:string,
    image:string,
    score:number,
    name:string,
    phone:string,
    live:string,
    school:string,
    subject:string

}



const initialState = {
    user: '',
    id:'',
    image:'',
    score:0,
    name:'',
    phone:'',
    live:'',
    school:'',
    subject:'',
    allUser:[]
}





export const SetUser = createSlice({
    name: 'signin',
    reducers: {
        setuser: (state, action: PayloadAction<REALUSER>) => {
            
            state.user = action.payload.user
            state.id = action.payload.id
            state.image = action.payload.image
            state.score = action.payload.score
            state.name = action.payload.name
            state.phone = action.payload.phone
            state.live = action.payload.live
            state.school = action.payload.school
            state.subject = action.payload.subject
         return state
        },
        setscore: (state, action: PayloadAction<number>) => {
            
            state.score = action.payload
         return state
      
        },
        setalluser: (state, action: PayloadAction<Array<Object>>) => {
            
            state.allUser = action.payload
         return state
      
        },
      
    },
    initialState
})
export const SetUserAction = SetUser.actions;
export const selectUserName= (state: RootState) => state.setUser
export default SetUser.reducer