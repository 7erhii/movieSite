// utils/api.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTgxZDZlMjIyYzlhMDFlMDA5YWY5ZTRkNmE0ZDU4ZCIsIm5iZiI6MTcyMjEyMTc3NC44MDA5NDcsInN1YiI6IjY2YTE5NzhhYmQyMzRmMTdmZDBiZjI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EgWNlHCqbE_dKbr4ehPPCN7vKaiCQAw4pPxNLc7LUy8",
  },
});

export default axiosInstance;
