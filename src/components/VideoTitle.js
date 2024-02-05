import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" text-black bg-white py-1 md:py-4 px-3 md:px-12 mr-4 rounded-md text-xl hover:opacity-60">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 text-white py-4 px-12 rounded-md text-xl bg-gray-100 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
