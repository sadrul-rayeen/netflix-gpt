import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addPopularVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    try {
      const nowPlayingData = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        api_options
      );
      const data = await nowPlayingData.json();
      dispatch(addPopularVideos(data?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default usePopularMovies;
