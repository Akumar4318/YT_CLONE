import { createSlice } from "@reduxjs/toolkit";


const sideMenuSlice=createSlice({

    name:"sidemenu",
    initialState:{
        isMenuOpen:true,

    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
       
    }

})

export default sideMenuSlice.reducer;
export const{toggleMenu}=sideMenuSlice.actions