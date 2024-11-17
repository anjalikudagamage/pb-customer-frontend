import { AxiosError } from "axios";
import { apiClient } from "../api/axiosClient";

interface LoginData {
  email: string;
  password: string;
}

export interface PhotographerUser {
  id: number;
  email: string;
  role: string;
}

export interface PhotographerDetails {
  description: string;
  businessName: string;
  packageDetails: Record<string, string>;
}

export const photographerLoginService = async (
  loginData: LoginData
): Promise<PhotographerUser> => {
  try {
    const { data } = await apiClient.post<PhotographerUser>(
      "/photographer/login",
      loginData
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Login failed";
    }
    throw "An unknown error occurred during login";
  }
};

export const fetchPhotographersService = async (): Promise<
  PhotographerDetails[]
> => {
  try {
    const { data } = await apiClient.get<PhotographerDetails[]>(
      "/photographer/allData"
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data?.message || "Failed to fetch photographers";
    }
    throw "An unknown error occurred while fetching photographers";
  }
};
