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

export interface BookingResponse {
  id: string;
  packageName: string;
  eventDate: string;
  eventTime: string;
  address: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

export const submitBookingService = async (
  bookingData: BookingData
): Promise<BookingResponse> => {
  try {
    const { data } = await apiClient.post<BookingResponse>(
      "/booking/create",
      bookingData
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Booking failed";
    }
    throw "An unknown error occurred during booking";
  }
};

export const fetchBookingsService = async (): Promise<BookingResponse[]> => {
  try {
    const { data } = await apiClient.get<BookingResponse[]>("/booking");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to fetch bookings";
    }
    throw "An unknown error occurred while fetching bookings";
  }
};
