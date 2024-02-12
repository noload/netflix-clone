import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      {movies && (
        <div className="-mt-72 pl-12 relative z-30">
          <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.TopRatedMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies.PopularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
