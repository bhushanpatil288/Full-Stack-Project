import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, getCurrentUserApi } from "../api/api";

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

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (thunkAPI) => {
    try{
      const response = await getCurrentUserApi();
      console.log(response)
      return response.data.data;
    } catch (error){
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
)