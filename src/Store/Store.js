import { configureStore } from "@reduxjs/toolkit";

import sidemenuReducer from "../Slices/SideMenuSlice"
import ytvideoReducer from "../Slices/YtVideo"

export const store=configureStore({
    reducer:{
        sidemenu:sidemenuReducer,
        ytvideo:ytvideoReducer,
    }
})