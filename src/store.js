import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./features/users/users.slice";

export const store = configureStore({
    reducer
})