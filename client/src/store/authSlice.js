import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authThunks";

const initialState = {
  isLoading: false,
  userData: null,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    logout: (state)=>{
      state.userData = null;
    }
  },
  extraReducers: (builder) =>{
    builder
      .addCase(registerUser.pending, (state)=>{
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) =>{
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;