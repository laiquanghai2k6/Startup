import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ChatGroup, CHATSGROUP, Users } from "../../assets/data/chatGroup"
import { RootState } from "../redux/store"
import { ChatGroupType } from "./MessengerSlice"

const initialState = {
    addGroup: CHATSGROUP,
}



// 

export const AddGroupSlice = createSlice({
    name: 'addGroup',
    reducers: {
        addGroup: (state, action: PayloadAction<ChatGroup>) =>{
            state.addGroup = [...state.addGroup,action.payload]
        },

        addMesGroup: (state,action: PayloadAction<ChatGroupType>) =>{
            const indexChatUpdate = state.addGroup.findIndex(chat=> chat.chat.num === action.payload.num)
            if(indexChatUpdate !== -1){
                const groupUpdate = [...state.addGroup[indexChatUpdate].chat.mes]
                groupUpdate.push(...action.payload.mes)
                state.addGroup[indexChatUpdate].chat.mes = groupUpdate
            }
            return state
        },
        addMemberGroup: (state,action: PayloadAction<Users>) =>{
            const indexChatUpdate = state.addGroup.findIndex(chat=> chat.chat.num === action.payload.num)
            if(indexChatUpdate !== -1){
                const groupMemberUpdate = [...state.addGroup[indexChatUpdate].users.user]
                // console.log("BEFOFE: ",groupMemberUpdate)
                console.log("CONSOLE: ",action.payload.user)
                const news = groupMemberUpdate.concat(action.payload.user)
                // console.log("AFTER: ",groupMemberUpdate)

                state.addGroup[indexChatUpdate].users.user = news
            }
            return state
        },
        deleteMemberGroup: (state,action: PayloadAction<Users>) =>{
            
            const indexChatUpdate = state.addGroup.findIndex(chat=> chat.chat.num === action.payload.num)
            if(indexChatUpdate !== -1){
                const userNotDelete = state.addGroup[indexChatUpdate].users.user.filter((item)=> item.username != action.payload.user[0].username)
              
                state.addGroup[indexChatUpdate].users.user = userNotDelete
            }
            return state
        },
    },
    initialState
})
export const AddGroupAction = AddGroupSlice.actions;
export const selectGroup = (state: RootState) => state.addGroup.addGroup
export default AddGroupSlice.reducer