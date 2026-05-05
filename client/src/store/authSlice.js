import { createSlice } from "@reduxjs/toolkit";
import { registerUser, getCurrentUser } from "./authThunks";

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
      .addCase(getCurrentUser.fulfilled, (state, action)=>{
        state.userData = action.payload
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action)=>{
        state.userData = null;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCurrentUser.pending, (state)=>{
        state.isLoading = true;
      })

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