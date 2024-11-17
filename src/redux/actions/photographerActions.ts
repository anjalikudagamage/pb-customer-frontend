import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

export const fetchPhotographers = createAsyncThunk(
  "photographer/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/photographer/allData");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch photographers"
        );
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
