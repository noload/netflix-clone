import { API_options, top_rated_url } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../store/reducers/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(top_rated_url, API_options);

    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
