import React, { useEffect } from "react";

// Components
import { useMoviePopularList } from "../../hooks/use-movie-popular-list";
import { useMovieUpcominglarList } from "../../hooks/use-movie-upcoming-list";
import MovieListItem from "../movieListItem";

export default function MainScreen() {
  const { isLoadingPopularData, moviesPopularData } = useMoviePopularList();
  const {
    moviesUpcomingData,
    isLoadingUpcomingData,
  } = useMovieUpcominglarList();

  useEffect(() => {
    if (!isLoadingPopularData && moviesPopularData.length > 0) {
      console.log("Movies Popular Data:", moviesPopularData);
    }
    if (!isLoadingUpcomingData && moviesUpcomingData.length > 0) {
      console.log("Movies Upcoming Data:", moviesUpcomingData);
    }
  }, [
    isLoadingPopularData,
    moviesPopularData,
    isLoadingUpcomingData,
    moviesUpcomingData,
  ]);

  return (
    <div className="flex w-full h-screen bg-black">
      <div className="w-1/2 flex flex-col" style={{maxHeight: "100vh" , overflow: "hidden", overflowY: "scroll"}}>
        <div className=" text-white">Popular</div>
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {moviesPopularData.map((item, index) => (
            <MovieListItem key={index} moveiCardData={item} />
          ))}
        </div>
      </div>
      <div className="w-1/2 flex flex-col" style={{maxHeight: "100vh" , overflow: "hidden", overflowY: "scroll"}}>
        <div className=" text-white">Upcoming</div>
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {moviesUpcomingData.map((item, index) => (
            <MovieListItem key={index} moveiCardData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
