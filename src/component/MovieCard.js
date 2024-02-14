import React from "react";
import { imageBaseURL } from "../utils/Constant";
import { Link } from "react-router-dom";

const MovieCard = ({ backdrop_path, id }) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="w-52 h-64 pr-4 transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer"
    >
      <img
        className="w-full h-full"
        alt="image"
        src={imageBaseURL + backdrop_path}
      />
    </Link>
  );
};

export default MovieCard;
