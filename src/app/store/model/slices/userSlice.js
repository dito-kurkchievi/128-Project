import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_LOCAL_STORAGE_KEY } from "../../../config/api";

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    logOut(state, action) {
      state.data = undefined;
      localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY); 
    }
  }
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;