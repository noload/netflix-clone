import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { Header } from "./Header";
import { useSelector } from "react-redux";
import { API_options, imageBaseURL } from "../utils/Constant";
const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useTrailerVideo(id);
  const [MovieInfo, setMovieInfo] = useState(null);
  const videos = useSelector((store) => store.movies.AllVideos);
  const getMovieInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/` + id,
      API_options
    );
    const json = await data.json();
    console.log(id);
    console.log(json);
    setMovieInfo(json);
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <div className="bg-zinc-500 w-screen">
      <Header />

      {MovieInfo && (
        <div className="w-full pt-24">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="px-5 z-40 py-2 bg-red-500 text-white"
          >
            Back
          </button>
          <div className="w-[40%] h-96 p-8 shadow-lg">
            <img
              className="w-full h-full"
              src={imageBaseURL + MovieInfo?.backdrop_path}
            ></img>
          </div>
          <div className="flex flex-col text-white gap-2 w-1/3 pt-10 p-8">
            <h1 className="text-3xl font-semibold ">{MovieInfo?.title}</h1>
            <p className="text-sm font-semibold w-full h-10 overflow-hidden">
              {MovieInfo?.overview}
            </p>
            <p className="text-white font-semibold">{MovieInfo.release_date}</p>
          </div>
          <div className="flex w-full ">
            <div className="w-full flex overflow-x-scroll gap-10 p-7">
              {videos?.map((trailerVideo, i) => {
                return (
                  <iframe
                    key={i}
                    className="w-[500px] h-[300px] aspect-video"
                    src={"https://www.youtube.com/embed/" + trailerVideo?.key}
                    title="YouTube video player"
                  ></iframe>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
