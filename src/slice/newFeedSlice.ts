import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"


const initialState = {
    posts: POSTS,
}

export interface AddNewFeed {
    imageUrl: string,
    user: string,
    like: number,
    caption: string,
    profilePicture: string, 
    comments: Comment[],
    num: number
}

export interface Comment {
    user: string, 
    comment: string
}

export interface AddComment {
    comment: Comment,
    idPost: number
}
export interface AddLike {
    like: number,
    idPost: number
}

export const newFeedSlice = createSlice({
    name: 'new_feed',
    reducers: {
        addPost: (state, action: PayloadAction<AddNewFeed>) => {
            // console.log("Payload: ", payload)
            state.posts =  [...state.posts, action.payload]
            
            // state.posts
        },
        updateComment: (state, action: PayloadAction<AddComment>) => {
            // const stateClone = {...state}
            const indexPostUpdate = state.posts.findIndex(post => post.num === action.payload.idPost);
            if (indexPostUpdate !== -1) {
                const commentPost = [...state.posts[indexPostUpdate].comments]
                commentPost.push(action.payload.comment)
                state.posts[indexPostUpdate].comments = commentPost
            // console.log("State Change", state)

            } 
            // console.log("State", state)
            return state
        },
        like: (state, action: PayloadAction<AddLike>) => {
            // console.log("Payload: ", payload)
            const indexPostUpdate = state.posts.findIndex(post => post.num === action.payload.idPost);
            if (indexPostUpdate !== -1) {
                let commentPost = state.posts[indexPostUpdate].like
                commentPost +=1
                state.posts[indexPostUpdate].like = commentPost
                // console.log(commentPost)

            } 
            return state
            
            // state.posts
        },
    },
    initialState
})
export const newFeedActions = newFeedSlice.actions;
export const selectNewFeed = (state: RootState) => state.posts.posts
export default newFeedSlice.reducer