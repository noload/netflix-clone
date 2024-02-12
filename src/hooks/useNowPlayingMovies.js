import { API_options, now_paying_url } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../store/reducers/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(now_paying_url, API_options);

    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
    console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
