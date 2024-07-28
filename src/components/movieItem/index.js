import React from "react";
import posterImage from "../../assets/images/posterImage.png";

export default function MovieItem({ movieItemData }) {
  const posterPath = movieItemData.backdrop_path
    ? `https://image.tmdb.org/t/p/w440_and_h660_face${movieItemData.backdrop_path}`
    : posterImage;

  let title = movieItemData.original_title;

  if (title.length > 24) {
    title = title.substring(0, 19) + "...";
  }
  return (
    <div>
      <div>
        <img
          src={posterPath}
          alt="Movie Poster"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div>
        <p className="text-blue-50 text-base font-light">{title}</p>
      </div>
    </div>
    // <div
    //   style={{
    //     width: "100%",
    //     padding: "0.5em",
    //     // overflow: "hidden",
    //     position: "relative",
    //     paddingBottom: "26%",
    //   }}
    //   className="flex flex-col border rounded-xl border-gray-800"
    // >
    //   <div
    //   className="flex flex-col text-center"
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%",
    //       gap: "0.5em",
    //     }}
    //   >
    // <img
    //   src={posterPath}
    //   alt="Movie Poster"
    //   className="w-full h-full object-cover rounded-t-lg"
    // />
    // <p className="text-blue-50 text-base font-light">{title}</p>
    //   </div>
    //   <div>{/* TODO: MOVIE INFO */}</div>
    // </div>
  );
}
