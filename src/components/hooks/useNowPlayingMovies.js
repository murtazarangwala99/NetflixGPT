import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";

const useNowPlayingMovies = () => {
  //  FEtch data from TMDB and update store
  const dispatch = useDispatch();

  // const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  useEffect(() => {
    // !nowPlayingMovies && getNowPlayingMovie();
    getNowPlayingMovie();
    // eslint-disable-next-line
  }, []);

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
