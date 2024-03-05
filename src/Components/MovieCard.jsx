import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ results, baseImageurl, imageurl }) => {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/watch/${id}`);
    console.log(id);
  }

  return (
    <div className=" flex-[3] py-6 px-8   space-y-6 ">
      <h1>Movie List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {results?.map((movie) => {
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
                  <img
                    width={40}
                    src="src\assets\images\play-movie.svg"
                    className=" z-[1000] "
                  />
                </div>
              </div>

              <h1>{movie.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
