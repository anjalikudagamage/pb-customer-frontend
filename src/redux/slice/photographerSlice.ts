import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotographers } from "../actions/photographerActions";

interface IPhotographerState {
  isLoading: boolean;
  isPhotographerAuthenticated: boolean;
  error: string | null;
  user: IPhotographerUser | null;
  photographers: IPhotographerDetails[] | null;
}

interface IPhotographerUser {
  id: number;
  email: string;
  role: string;
}

export interface IPhotographerDetails {
  description: string;
  businessName: string;
  packageDetails: { [key: string]: string };
}
const initialState: IPhotographerState = {
  isLoading: false,
  isPhotographerAuthenticated: false,
  photographers: null,
  error: null,
  user: null,
};

const photographerSlice = createSlice({
  name: "photographer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPhotographers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photographers = action.payload;
        state.error = null;
      })
      .addCase(fetchPhotographers.rejected, (state, action) => {
        state.isLoading = false;
        state.photographers = null;
        state.error = action.payload as string;
      });
  },
});

export default photographerSlice.reducer;
