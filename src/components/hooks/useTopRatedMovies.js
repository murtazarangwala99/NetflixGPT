import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  // const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  useEffect(() => {
    // !topRatedMovies && getTopRatedMovies();
    getTopRatedMovies();
    // eslint-disable-next-line
  }, []);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
