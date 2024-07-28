import React from "react";
import posterImage from "../../assets/images/posterImage.png";

export default function MovieListItem({ moveiCardData }) {
  const posterPath = moveiCardData.backdrop_path
    ? `https://image.tmdb.org/t/p/w440_and_h660_face${moveiCardData.backdrop_path}`
    : posterImage; // Используем стандартное изображение-заглушку, если нет изображения

  return (
    <div
      style={{
        width: "50%",
        padding: "0.5em",
        overflow: "hidden",
        position: "relative",
        paddingBottom: "70.5%",
      }}
      className="flex flex-col border rounded-xl border-gray-800"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={posterPath}
          alt="Movie Poster"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div>{/* TODO: MOVIE INFO */}</div>
    </div>
  );
}
