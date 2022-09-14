import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../../assets/data/post"
import { RootState } from "../../redux/store"


const initialState = {
    posts: POSTS,
}

export interface AddNewFeed {
    imageUrl: string,
    user: string,
    like: number,
    caption: string,
    profilePicture: string, 
    comments: Comment[]
}

interface Comment {
    user: string, 
    comment: string
}

export const newFeedSlice = createSlice({
    name: 'new_feed',
    reducers: {
        add: (state, action: PayloadAction<AddNewFeed>) => {
            // console.log("Payload: ", payload)
            state.posts =  [...state.posts, action.payload]
            // state.posts
        }
    },
    initialState
})
export const newFeedActions = newFeedSlice.actions;
export const selectNewFeed = (state: RootState) => state.posts.posts
export default newFeedSlice.reducer