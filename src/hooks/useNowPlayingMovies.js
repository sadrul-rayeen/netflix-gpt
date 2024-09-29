import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addMoviesList } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    try {
      const nowPlayingData = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        api_options
      );
      const data = await nowPlayingData.json();
      console.log(data);
      dispatch(addMoviesList(data?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
