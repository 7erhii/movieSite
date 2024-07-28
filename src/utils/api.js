import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
});

export default axiosInstance;
