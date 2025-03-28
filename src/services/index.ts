import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
