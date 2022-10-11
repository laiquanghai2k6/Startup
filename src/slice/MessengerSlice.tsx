import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { POSTS } from "../../assets/data/post"
import { USERS } from "../../assets/data/userStory"
import { RootState } from "../redux/store"

const chat = USERS.map((chat,index)=>{
    return chat.chat
})


export interface chata{
    key:number,
    message:string,
    type:string
}
export interface chatb{
    key:number,
    message:string,
    imgUser:string,
    type:string
}
export interface ChatType{
    num:number | undefined
    mes: chata[]

}
export interface ChatGroupType{
    num:number | undefined
    mes: chatb[]

}
const initialState = {
    mess: chat,
}
// [1,2,3]
// 

export const MessengerSlice = createSlice({
    name: 'messenger',
    reducers: {
        addMes: (state, action: PayloadAction<ChatType>) =>{
            const indexChatUpdate = state.mess.findIndex(chat=> chat.num === action.payload.num)
            if (indexChatUpdate !== -1) {
                const mesUpdate = [...state.mess[indexChatUpdate].mes]
                mesUpdate.push(...action.payload.mes)
                state.mess[indexChatUpdate].mes = mesUpdate
            // console.log("State Change", state)

            } 
            // console.log("State", state)
            return state
        },
    },
    initialState
})
export const MessengerAction = MessengerSlice.actions;
export const selectMessenger = (state: RootState) => state.messenger.mess
export default MessengerSlice.reducer