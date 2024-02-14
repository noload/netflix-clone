import { API_options, search_url } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addSearchedVideo } from "../store/reducers/movieSlice";
import { useEffect } from "react";

const useSearchMovies = (searchString) => {
  const dispatch = useDispatch();
  const getSearchMovies = async () => {
    const data = await fetch(
      search_url + `&query=${searchString}`,
      API_options
    );

    const json = await data.json();
    dispatch(addSearchedVideo(json.results));
  };

  useEffect(() => {
    getSearchMovies();
  }, []);
};

export default useSearchMovies;
