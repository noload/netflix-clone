import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] pl-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg text-white w-1/2">{overview}</p>
      <div>
        <button className="bg-white rounded-md text-2xl text-black py-3 px-16 m-2 hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 rounded-md text-2xl text-white py-3 px-12 bg-opacity-50 hover:opacity-80">
          More Info
        </button>
      </div>
      <></>
    </div>
  );
};

export default VideoTitle;
