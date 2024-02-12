import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className=" bg-black">
      {movies && (
        <div className="-mt-56 pl-12 relative z-30">
          <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
          <MovieList title={"Tranding"} movies={movies.NowPlayingMovies} />
          <MovieList
            title={"Popular Movies"}
            movies={movies.NowPlayingMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.NowPlayingMovies}
          />
          <MovieList title={"Horror Movies"} movies={movies.NowPlayingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
