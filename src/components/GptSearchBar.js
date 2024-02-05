import { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an API call to openAI and get Movie Results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices[0].message.content);

    if (!gptResults.choices) {
      // Error Handling
      return <p>GPT Not working</p>;
    }
    // Convert to array of Movies
    const gptMovie = gptResults.choices[0].message.content.split(", ");
    console.log(gptMovie);

    // for each movie will search on TMDB API

    const promiseArray = gptMovie.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResults({
        movieNames: gptMovie,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-10"
        />
        <button
          className="px-2 py-4 m-4 col-span-2 rounded-lg bg-red-700 text-white "
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
