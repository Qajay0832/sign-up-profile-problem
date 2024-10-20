import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './signupdata'

export default configureStore({
    reducer:{
        signupData:signupReducer
    }
})