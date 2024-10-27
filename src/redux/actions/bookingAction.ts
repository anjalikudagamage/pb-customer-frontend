// bookingAction.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookingClient } from "../../api/axiosClient";
import { AxiosError } from "axios";

interface BookingPayload {
  packageName: string;
  eventDate: string;
  eventTime: string;
  address: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

export const submitBooking = createAsyncThunk(
  "booking/submitBooking",
  async (payload: BookingPayload, { rejectWithValue }) => {
    try {
      const response = await bookingClient.post("/create", payload);
      return response.data;
    } catch (error: AxiosError | unknown) {
      let errorMsg = "Booking failed";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);

export const fetchBookings = createAsyncThunk(
  "booking/fetchBookings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await bookingClient.get("/");
      return response.data;
    } catch (error: AxiosError | unknown) {
      let errorMsg = "Failed to fetch bookings";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      return rejectWithValue(errorMsg);
    }
  }
);
