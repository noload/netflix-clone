import React from "react";
import { imageBaseURL } from "../utils/Constant";
import { Link } from "react-router-dom";

const MovieDetailCard = ({
  title,
  backdrop_path,
  overview,
  release_date,
  id,
}) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="w-[22%] p-5 pb-0 bg-black bg-opacity-85 rounded-lg shadow-lg"
    >
      <div className="w-full h-40 overflow-hidden p-2 rounded">
        <img src={imageBaseURL + backdrop_path}></img>
      </div>
      <div className="flex flex-col p-2 text-white gap-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm font-semibold w-full h-10 overflow-hidden">
          {overview}
        </p>
        <p className="text-white font-semibold">{release_date}</p>
      </div>
    </Link>
  );
};

export default MovieDetailCard;
