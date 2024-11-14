import { createAsyncThunk } from "@reduxjs/toolkit";
import { photographerClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

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


