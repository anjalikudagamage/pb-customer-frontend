import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotographersService } from "../../services/photographerService";

export const fetchPhotographers = createAsyncThunk(
  "photographer/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPhotographersService();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
