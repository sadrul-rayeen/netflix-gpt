import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      api_options
    );
    const videoData = await data.json();

    const trailerVideos = videoData?.results?.filter(
      (r) => r["type"] === "Trailer"
    );
    const trailer = trailerVideos.length
      ? trailerVideos[0]
      : videoData.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useTrailerVideo;
