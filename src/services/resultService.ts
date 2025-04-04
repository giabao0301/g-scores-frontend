import axiosClient from ".";
import { AxiosResponse } from "axios";
import { ApiResponse } from "@/types/apiResponse";
import { ResultStat } from "@/types/result";

export const getResultStatsBySubject = async (
  subject: string
): Promise<ResultStat[]> => {
  const response: AxiosResponse<ApiResponse<ResultStat[]>> =
    await axiosClient.get(`/results/stats/${subject}`);

  return response.data.data;
};
