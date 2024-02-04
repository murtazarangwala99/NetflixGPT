import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  // movies.nowPlayingMovies &&
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-60 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
/* 
  movie list - popular
    - Movie Cards
  movie list - trending
    - Movie Cards
  movie list - now playing
    - Movie Cards
  movie list - trending
    - Movie Cards
*/
