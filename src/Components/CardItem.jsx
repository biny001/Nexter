import React from "react";
import { FaPlay } from "react-icons/fa";

const CardItem = ({ movie, handleClick, baseImageurl }) => {
  return (
    <div
      className=" flex flex-col rounded-2xl justify-center items-center"
      key={movie.id}
      onClick={() => handleClick(movie?.id)}
    >
      <div className="relative h-max group items-center justify-center">
        <img
          src={`${baseImageurl}${movie.poster_path}`}
          alt={movie.title}
          className="rounded-2xl"
        />
        <div className="absolute inset-0 bg-black opacity-0 cursor-pointer group-hover:opacity-90 transition-all duration-300 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl flex items-center justify-center">
          {" "}
          <FaPlay className=" z-[1000] text-dark-purple  font-bold" />
        </div>
      </div>

      <h1>{movie.title}</h1>
    </div>
  );
};

export default CardItem;
