import React from "react";
import MovieDetailCard from "./MovieDetailCard";
import { useSelector } from "react-redux";
const GPTMovieSuggestion = () => {
  const movieDetail = useSelector((store) => store.movies?.SearchedMovies);
  console.log(movieDetail);
  return (
    <div className="w-full flex flex-wrap gap-10 mt-10  bg-black bg-opacity-70 pt-10">
      {movieDetail &&
        movieDetail?.map((movie) => {
          if (movie.backdrop_path) {
            return <MovieDetailCard {...movie} />;
          }
        })}
    </div>
  );
};

export default GPTMovieSuggestion;
