import { API_options, now_paying_url, popular_url } from "../utils/Constant";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovie,
  addPopularMovie,
} from "../store/reducers/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(popular_url, API_options);

    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
