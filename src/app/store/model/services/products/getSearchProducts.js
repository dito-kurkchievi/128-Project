import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../../config/api";
import { productActions } from "../../slices/productSlice";

export const getSearchProductsService = createAsyncThunk(
  'get search products',
  async (search, { rejectWithValue }) => {
    try {
      const response = await $api.get(`/products?title_like=${search}`);
      return response.data;
    }
    catch(e) {
      return rejectWithValue(e.message);
    }
  }
)