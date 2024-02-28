import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_LOCAL_STORAGE_KEY } from "../../../config/api";
import { getProductsService } from "../services/products/getProductsService";

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsService.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductsService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProductsService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;