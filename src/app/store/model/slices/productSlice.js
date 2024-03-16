import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_LOCAL_STORAGE_KEY } from "../../../config/api";
import { getProductsService } from "../services/products/getProductsService";
import { getSearchProductsService } from "../services/products/getSearchProducts";

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
  productsTotalCount: 0,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTotalProductsCount(state, action) {
      state.productsTotalCount = action.payload;
    }
  },
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

    builder
      .addCase(getSearchProductsService.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSearchProductsService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getSearchProductsService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;