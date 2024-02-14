import React from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        ></input>
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white font-semibold  rounded">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
