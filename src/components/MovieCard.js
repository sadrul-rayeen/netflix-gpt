import React from "react";
import { image_cdn_url } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={image_cdn_url + posterPath} />
    </div>
  );
};

export default MovieCard;
