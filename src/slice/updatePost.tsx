import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';


export interface UPDATEPOST {
    created:string,
    caption:string,
    likes:number,
    image:string,
}
export interface UPDATECOMMENT {
    userId:string,
    content:string,
    postId:number,
}


const UpdatePosts:UPDATEPOST[] = [

]
const UpdateComment:UPDATECOMMENT[] = []

const initialState = {
   post:UpdatePosts,
   comment:UpdateComment,
   likes:0
}





export const UpdatePost = createSlice({
    name: 'updatepost',
    reducers: {
        setupdatepost: (state, action: PayloadAction<UPDATEPOST>) => {
            
            state.post = [...state.post,action.payload]
         return state
        },
        setupdatecomment: (state, action: PayloadAction<UPDATECOMMENT>) => {
            
            state.comment = [...state.comment,action.payload]
         return state
        },
        setupdatelikes: (state, action: PayloadAction<number>) => {
            
            state.likes += action.payload
         return state
        },
    
        
      
    },
    initialState
})
export const SetUpdatePostAction = UpdatePost.actions;
export const selectUpdatePost= (state: RootState) => state.setUpdatePost
export default UpdatePost.reducer