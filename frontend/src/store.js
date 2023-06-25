import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/userSlice";
import ProductSlice from "./features/productSlice";
export const store = configureStore({
    reducer:{
        user:UserSlice,
        product:ProductSlice,
    }
})