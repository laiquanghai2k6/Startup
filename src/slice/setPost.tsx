import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';


const initialState = {
    post:[],
    comment:[],
}





export const SetPost = createSlice({
    name: 'setpost',
    reducers: {
        setpost: (state, action: PayloadAction<Array<Object>>) => {
            
            state.post = action.payload
         return state
        },
        setcomment:(state, action: PayloadAction<Array<Object>>) => {
            
            state.comment = action.payload
         return state
        },
        
      
    },
    initialState
})
export const SetPostAction = SetPost.actions;
export const selectPost= (state: RootState) => state.setPost
export default SetPost.reducer