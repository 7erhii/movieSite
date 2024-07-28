import React from "react";
import posterImage from "../../assets/images/posterImage.png";

export default function MovieItem({ movieItemData }) {
  const posterPath = movieItemData.poster_path
    ? `https://image.tmdb.org/t/p/w440_and_h660_face${movieItemData.poster_path}`
    : posterImage;

  let title = movieItemData.original_title;

  if (window.innerWidth < 600) {
    if (title.length > 18) {
      title = title.substring(0, 15) + "...";
    }
  } else {
    if (title.length > 22) {
      title = title.substring(0, 19) + "...";
    }
  }
  return (
    <div className="lg:w-[20%] w-[33%] p-2 mt-4 cursor-pointer group">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={posterPath}
          alt="Movie Poster"
          className="w-full h-full object-cover  transition-transform duration-300 ease-in-out lg:group-hover:scale-110"
        />
      </div>
      <div className="mt-2">
        <p className="text-slate-400 text-xs lg:text-base font-normal text-center">{title}</p>
      </div>
    </div>
  );
}
