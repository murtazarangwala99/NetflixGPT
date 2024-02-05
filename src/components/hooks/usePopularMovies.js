import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../utils/movieSlice";

const usePopularMovies = () => {
  //  FEtch data from TMDB and update store
  const dispatch = useDispatch();
  // const popularMovies = useSelector((store) => store.movie.popularMovies);

  useEffect(() => {
    // !popularMovies && getPopularMovie();

    getPopularMovie();
    // eslint-disable-next-line
  }, []);

  const getPopularMovie = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
