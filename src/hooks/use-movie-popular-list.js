import { useEffect, useState } from "react";
import axiosInstance from "../utils/api";

export const useMoviePopularList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/movie/popular", {
        params: { language: "en-US", page: 1 },
      });
      setData(response.data.results);
    } catch (error) {
      console.error("Movie data loaded with error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    moviesPopularData: data,
    isLoadingPopularData: loading,
  };
};
