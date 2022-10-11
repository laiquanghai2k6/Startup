import { savePost } from '../../assets/data/savePost';
import { AddNewFeed } from './newFeedSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { RootState } from "../redux/store"
import { SCORE } from '../../assets/data/score';


const initialState = {
    score: SCORE,
}





export const ScoreSlice = createSlice({
    name: 'score',
    reducers: {
        addScore: (state, action: PayloadAction<number>) => {
            
            state.score += action.payload
         return state
        },
    },
    initialState
})
export const scoreActions = ScoreSlice.actions;
export const selectScore = (state: RootState) => state.score
export default ScoreSlice.reducer