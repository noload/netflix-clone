import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { bg_img } from "../utils/Constant";
import MovieDetail from "./MovieDetail";

const GPTSearch = () => {
  return (
    <div className="w-screen">
      <div className="absolute -z-10">
        <img className="w-screen h-screen" src={bg_img} />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
