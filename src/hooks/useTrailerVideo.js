import { addTrailerVideo } from "../store/reducers/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/Constant";
import { useEffect } from "react";
const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_options
    );
    const json = await data.json();
    const trailer = json.results.filter((video) => video.type == "Trailer")[0];
    const newTrailer = trailer ? trailer : json.results[0];
    dispatch(addTrailerVideo(newTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
