import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/movieSlice";

const usePopularMovies = () => {
  //  FEtch data from TMDB and update store
  const dispatch = useDispatch();

  useEffect(() => {
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
