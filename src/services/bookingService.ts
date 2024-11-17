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

export const submitBookingService = async (bookingData: BookingData): Promise<any> => {
  try {
    const { data } = await apiClient.post("/booking/create", bookingData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Booking failed";
    }
    throw "An unknown error occurred during booking";
  }
};

export const fetchBookingsService = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get("/booking");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to fetch bookings";
    }
    throw "An unknown error occurred while fetching bookings";
  }
};
