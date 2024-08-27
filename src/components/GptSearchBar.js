import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageName = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[6%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-10 rounded-lg"
          type="text"
          placeholder={lang[languageName].gptSearchPlaceholder}
        />
        <button className="col-span-2 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {lang[languageName].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
