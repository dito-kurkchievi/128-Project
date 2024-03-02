import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./model/slices/userSlice";
import { productReducer } from "./model/slices/productSlice";
import { cartReducer } from "./model/slices/cartSlice";

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
})

export const store = configureStore({
  reducer: reducers
});