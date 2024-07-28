import React, { useEffect } from "react";

// Components
import { useMoviePopularList } from "../../hooks/use-movie-popular-list";
import SearchInput from "../searchInput";
import MovieItem from "../movieItem";

export default function MainMovieScreen() {
  const { isLoadingPopularData, moviesPopularData } = useMoviePopularList();

  useEffect(() => {
    if (!isLoadingPopularData && moviesPopularData.length > 0) {
      console.log("Movies Popular Data:", moviesPopularData);
    }
  }, [isLoadingPopularData, moviesPopularData]);

  return (
    <div className="flex flex-col  w-full bg-gray-900 justify-center pb-10">
      <div className="flex w-full mx-auto justify-center py-10">
        <SearchInput />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-3 max-w-[965px] mx-auto px-5">
        {moviesPopularData.slice(0, 5).map((item) => (
          <MovieItem key={item.id} movieItemData={item} />
        ))}
      </div>
    </div>
  );
}
