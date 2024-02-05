import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggetion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames || !movieResults) {
    return null;
  }
  return (
    <div className="px-12 py-4 bg-black bg-opacity-80 text-white ">
      <div>
        {/* <h1>{movieNames[0]}</h1> */}
        {/* <MovieList title={movieNames[0]} movies={movieResults[0]} /> */}
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggetion;
