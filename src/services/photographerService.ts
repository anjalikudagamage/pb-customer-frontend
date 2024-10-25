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

