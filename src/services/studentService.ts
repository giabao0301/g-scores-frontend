import axiosClient from ".";
import { AxiosResponse } from "axios";
import { ApiResponse } from "@/types/apiResponse";
import { Student, TopStudent } from "@/types/student";

export const getStudentByRegistrationNumber = async (
  registrationNumber: string
): Promise<Student> => {
  const response: AxiosResponse<ApiResponse<Student>> = await axiosClient.get(
    `/students/${registrationNumber}`
  );

  return response.data.data;
};

export const getTopStudents = async (
  group: string,
  top?: string
): Promise<TopStudent[]> => {
  const response: AxiosResponse<ApiResponse<TopStudent[]>> =
    await axiosClient.get(`/students/topGroups/${group}?top=${top}`);

  return response.data.data;
};
