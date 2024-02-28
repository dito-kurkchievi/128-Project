import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./model/slices/userSlice";
import { productReducer } from "./model/slices/productSlice";

const reducers = combineReducers({
  user: userReducer,
  product: productReducer
})

export const store = configureStore({
  reducer: reducers
});