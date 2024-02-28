import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../../config/api";

export const getProductsService = createAsyncThunk(
  'get products',
  async (_, { rejectWithValue }) => {
    try {
      const response = await $api.get('/products');
      return response.data;
    }
    catch(e) {
      return rejectWithValue(e.message);
    }
  }
)