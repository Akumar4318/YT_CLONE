import { createSlice } from "@reduxjs/toolkit";


const YTvideoSlice=createSlice({
    name:"ytvideo",
    initialState:{
        ytVideos:[]
    },

    reducers:{
        addYtVideo:(state,action)=>{
            state.ytVideos=action.payload
        }
    }
})


export default YTvideoSlice.reducer;

export const {addYtVideo} = YTvideoSlice.actions;