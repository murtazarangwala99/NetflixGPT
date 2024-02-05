import React from "react";
import { IMAGE_CDN } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  //   console.log(posterPath);
  if (!posterPath) return null;
  return (
    <div className="w-[120px]">
      <img src={IMAGE_CDN + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
