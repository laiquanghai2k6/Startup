import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"


const initialState = {
    posts: savePost,
}





export const savePostSlice = createSlice({
    name: 'save_post',
    reducers: {
        savePost: (state, action: PayloadAction<AddNewFeed>) => {
            // console.log("Payload: ", payload)
            state.posts =  [...state.posts, action.payload]
            // console.log("SAVE :",state.posts)
            // state.posts
        },
    },
    initialState
})
export const saveActions = savePostSlice.actions;
export const selectSavePost = (state: RootState) => state.savePost.posts
export default savePostSlice.reducer