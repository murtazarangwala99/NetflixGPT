import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  // fetch Trailer Video and update store
  useEffect(() => {
    // !trailerVideo && getMovieVideos();

    getMovieVideos();
    // eslint-disable-next-line
  }, []);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
    // console.log(trailer);
    // "wYmtRhKvmVE"
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
