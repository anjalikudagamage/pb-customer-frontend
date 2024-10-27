// bookingService.ts
import { AxiosError } from "axios";
import { bookingClient } from "../api/axiosClient";

export interface BookingData {
  packageName: string;
  eventDate: string;
  eventTime: string;
  address: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

export const submitBookingService = async (bookingData: BookingData) => {
  try {
    const response = await bookingClient.post("/create", bookingData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Booking failed");
    }
    return Promise.reject("An unknown error occurred during booking");
  }
};

export const fetchBookingsService = async () => {
  try {
    const response = await bookingClient.get("/");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Failed to fetch bookings");
    }
    return Promise.reject("An unknown error occurred while fetching bookings");
  }
};
