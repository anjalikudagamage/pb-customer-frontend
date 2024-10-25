import { createSlice } from "@reduxjs/toolkit";
import { photographerLogin } from "../actions/photographerActions";

interface IPhotographerState {
  isLoading: boolean;
  isPhotographerAuthenticated: boolean;
  error: string | null;
  user: IPhotographerUser | null;
  photographerDetails: IPhotographerDetails | null;
}

interface IPhotographerUser {
  id: number;
  email: string;
  role: string;
}

interface IPhotographerDetails {
  photographerName: string;
  description: string;
  packages: Array<{ name: string; price: string; features: string[] }>;
}

const initialState: IPhotographerState = {
  isLoading: false,
  isPhotographerAuthenticated: false,
  error: null,
  user: null,
  photographerDetails: null,
}; 

const photographerSlice = createSlice({
  name: "photographer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(photographerLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(photographerLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isPhotographerAuthenticated = true;
      state.user = action.payload.photographerDetails; 
      state.error = null;
    })
    .addCase(photographerLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isPhotographerAuthenticated = false;
      state.error = action.payload as string;
    })
  },
});

export default photographerSlice.reducer;