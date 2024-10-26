import { AxiosError } from "axios";
import { photographerClient } from "../api/axiosClient";

interface LoginData {
  email: string;
  password: string;
}

export const photographerLoginService = async (loginData: LoginData) => {
  try {
    const response = await photographerClient.post("/login", loginData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Login failedd");
    }
    return Promise.reject("An unknown error occurred during login");
  }
};

// New function to fetch photographer data
export const fetchPhotographersService = async () => {
  try {
    const response = await photographerClient.get("/allData");
    return response.data; // Assuming the API response contains an array of photographer objects
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data?.message || "Failed to fetch photographers");
    }
    return Promise.reject("An unknown error occurred while fetching photographers");
  }
};
