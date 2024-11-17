import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";

interface LoginData {
  email: string;
  password: string;
}

export const photographerLoginService = async (loginData: LoginData): Promise<any> => {
  try {
    const { data } = await apiClient.post("/photographer/login", loginData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Login failed";
    }
    throw "An unknown error occurred during login";
  }
};

export const fetchPhotographersService = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get("/photographer/allData");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to fetch photographers";
    }
    throw "An unknown error occurred while fetching photographers";
  }
};
