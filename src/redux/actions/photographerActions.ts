import { createAsyncThunk } from "@reduxjs/toolkit";
import { photographerClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

interface LoginPayload {
  email: string;
  password: string;
}


// Photographer login async action
export const photographerLogin = createAsyncThunk(
  "photographer/login",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await photographerClient.post("/login", payload);
      return response.data;
    } catch (error: AxiosError | unknown) {
      let errorMsg = "Login failed";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

// Photographer data fetch async action
export const fetchPhotographers = createAsyncThunk(
  "photographer/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await photographerClient.get("/allData");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch photographers");
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
