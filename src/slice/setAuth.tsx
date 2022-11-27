import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';


export interface Auth{
    sign:number;
    user:string;
}


const initialState = {
    signin: 0,
}





export const SetSignIn = createSlice({
    name: 'signin',
    reducers: {
        setsignin: (state, action: PayloadAction<number>) => {
            
            state.signin = action.payload
         return state
        },
      
    },
    initialState
})
export const SetAuthAction = SetSignIn.actions;
export const selectSignIn = (state: RootState) => state.setSignIn
export default SetSignIn.reducer