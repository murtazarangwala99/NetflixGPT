import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggetion from "./GptSuggetion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="background" className="h-screen object-cover" />
      </div>
      <div>
        <GptSearchBar />
        <GptSuggetion />
      </div>
    </div>
  );
};

export default GptSearch;
