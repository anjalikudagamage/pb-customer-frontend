import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";

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
    const response = await apiClient.post("/booking/create", bookingData);
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
    const response = await apiClient.get("/booking");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(
        error.response?.data?.message || "Failed to fetch bookings"
      );
    }
    return Promise.reject("An unknown error occurred while fetching bookings");
  }
};

//test