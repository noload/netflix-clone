import React, { useEffect, useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useSelector, useDispatch } from "react-redux";
import { API_options, search_url } from "../utils/Constant";
import { addSearchedVideo } from "../store/reducers/movieSlice";
const GPTSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getSearchMovies = async () => {
    const data = await fetch(
      search_url + `&query=${searchText.current.value}`,
      API_options
    );
    const json = await data.json();
    dispatch(addSearchedVideo(json.results));
  };

  useEffect(() => {
    getSearchMovies();
  }, [searchText]);
  return (
    <div className="pt-20 flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          className="p-2 m-2 col-span-9"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        ></input>
        <button
          onClick={() => {
            getSearchMovies();
          }}
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white font-semibold  rounded"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
