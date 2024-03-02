import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../../config/api";
import { productActions } from "../../slices/productSlice";

export const getProductsService = createAsyncThunk(
  'get products',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await $api.get(`/products?_page=${params.page}&_limit=${params.limit}`);

      const totalCount = response.headers["x-total-count"];
      dispatch(productActions.setTotalProductsCount(+totalCount));

      return response.data;
    }
    catch(e) {
      return rejectWithValue(e.message);
    }
  }
)