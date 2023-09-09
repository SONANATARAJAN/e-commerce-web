import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cart";

export default configureStore({
    reducer: {
        cart: cartSlice
    }
})