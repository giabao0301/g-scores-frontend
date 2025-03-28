import { Score, ScoreRange, TopStudent } from "@/types/score";
import axiosClient from ".";
import { AxiosResponse } from "axios";
import { ApiResponse } from "@/types/apiResponse";

export const getScoreByRegistrationNumber = async (
  registrationNumber: string
): Promise<Score> => {
  const response: AxiosResponse<ApiResponse<Score>> = await axiosClient.get(
    `/scores/${registrationNumber}`
  );

  return response.data.data;
};

export const getScoreStats = async (subject: string): Promise<ScoreRange[]> => {
  const response: AxiosResponse<ApiResponse<ScoreRange[]>> =
    await axiosClient.get(`/scores/stats/${subject}`);

  return response.data.data;
};

export const getTopStudents = async (
  group: string,
  limit: number = 10
): Promise<TopStudent[]> => {
  const response: AxiosResponse<ApiResponse<TopStudent[]>> =
    await axiosClient.get(`/scores/top/${group}`, {
      params: {
        limit: limit,
      },
    });

  return response.data.data;
};
