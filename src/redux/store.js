import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/usersReducer";



export const store = configureStore({
    reducer : combineReducers({
        user : userReducer
    })
})


