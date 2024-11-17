import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";

interface LoginData {
  email: string;
  password: string;
}

export const photographerLoginService = async (loginData: LoginData) => {
  try {
    const response = await apiClient.post("/photographer/login", loginData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Login failedd");
    }
    return Promise.reject("An unknown error occurred during login");
  }
};

export const fetchPhotographersService = async () => {
  try {
    const response = await apiClient.get("/photographer/allData");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(
        error.response?.data?.message || "Failed to fetch photographers"
      );
    }
    return Promise.reject(
      "An unknown error occurred while fetching photographers"
    );
  }
};
