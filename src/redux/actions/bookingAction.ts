import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingData, fetchBookingsService, submitBookingService } from "../../services/bookingService";

export const fetchBookings = createAsyncThunk(
  "booking/fetchBookings",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchBookingsService();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const submitBooking = createAsyncThunk(
  "booking/submitBooking",
  async (payload: BookingData, { rejectWithValue }) => { 
    try {
      return await submitBookingService(payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);