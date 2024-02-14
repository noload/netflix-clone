import React from "react";
import { useParams } from "react-router-dom";
import useTrailerVideo from "../hooks/useTrailerVideo";
const MovieDetail = () => {
  const { id } = useParams();
  useTrailerVideo(id);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default MovieDetail;
