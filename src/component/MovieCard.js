import React from "react";
import { imageBaseURL } from "../utils/Constant";

const MovieCard = ({ backdrop_path }) => {
  console.log(backdrop_path);
  return (
    <div className="w-52 h-64 pr-4">
      <img
        className="w-full h-full"
        alt="image"
        src={imageBaseURL + backdrop_path}
      />
    </div>
  );
};

export default MovieCard;
