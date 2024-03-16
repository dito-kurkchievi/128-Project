import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.data.push(action.payload);
    },
    removeFromCart(state, action) {
      state.data = state.data.filter(product => product.id !== action.payload.id);
    },
    setCart(state, action) {
      state.data = action.payload;
    },
    clear(state) {
      state.data = [];
    }
  },
})

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;