import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggetion from "./GptSuggetion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img src={BACKGROUND_IMG} alt="background" className="fixed -z-10" />
      <GptSearchBar />
      <GptSuggetion />
    </div>
  );
};

export default GptSearch;
