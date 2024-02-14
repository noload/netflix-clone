import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return;
  const random = Math.floor(Math.random() * 20);
  const mainMovie = movies[random];

  return (
    <div>
      <VideoTitle {...mainMovie} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
