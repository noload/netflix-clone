import { API_options, top_rated_url, upcoming_url } from "../utils/Constant";
import { useDispatch } from "react-redux";
import {
  addTopRatedMovie,
  addUpcomingMovie,
} from "../store/reducers/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(upcoming_url, API_options);

    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
