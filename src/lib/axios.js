import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-backend-3ckw.onrender.com/api/",
    withCredentials: true,
});