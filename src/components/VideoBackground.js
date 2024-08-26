import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVdo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div>
      {trailerVdo && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVdo?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
