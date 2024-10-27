// bookingSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { submitBooking, fetchBookings } from "../actions/bookingAction";

interface BookingState {
  isLoading: boolean;
  error: string | null;
  bookings: BookingDetails[] | null;
}

interface BookingDetails {
  packageName: string;
  eventDate: string;
  eventTime: string;
  address: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

const initialState: BookingState = {
  isLoading: false,
  error: null,
  bookings: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitBooking.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
        state.error = null;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.bookings = null;
        state.error = action.payload as string;
      });
  },
});

export default bookingSlice.reducer;
