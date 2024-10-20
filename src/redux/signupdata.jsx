import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
    name:'userDetails',
    initialState:{
        value:{
            fullName:'',
            email:'',
            password:''
        }
    },
    reducers:{
        newValue:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {newValue}=userDetails.actions
export default userDetails.reducer