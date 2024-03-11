import React from "react";
import { useNavigate } from "react-router-dom";

import CardItem from "./CardItem";

const MovieCard = ({ results, baseImageurl, imageurl }) => {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/watch/${id}`);
    console.log(id);
  }

  return (
    <div className=" flex-[3] py-6 px-8   space-y-6 ">
      <h1>Trending</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {results?.map((movie) => {
          return (
            <CardItem
              movie={movie}
              key={movie?.id}
              handleClick={handleClick}
              baseImageurl={baseImageurl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
