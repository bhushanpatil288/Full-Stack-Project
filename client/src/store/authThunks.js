import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../api/api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async(userData, thunkAPI) => {
    try{
      const response = await register(userData)
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
)