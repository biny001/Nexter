import React, { useContext } from "react";
import { movieContext } from "../Context/MovieContextProvider";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const { results } = useContext(movieContext);
  const baseImageurl = "https://image.tmdb.org/t/p/w92";
  const navigate = useNavigate();
  console.log(results);

  if (results?.length === 0 || results === "undefined") return null;

  //   function handleClick() {
  //     navigate(`/watch/${movie?.id}`);
  //     console.log("clicked");
  //   }
  return (
    <div className=" w-full">
      <ul className="w-full  text-xs md:text-sm text-slate-50 max-h-40 bg-slate-900/40 flex flex-col pt-1 px-1 overflow-x-hidden overflow-y-scroll">
        {results?.map((movie) => {
          return (
            <li
              onClick={() => navigate(`/watch/${movie?.id}`)}
              key={movie.id}
              className="flex items-center cursor-pointer  space-x-3 px-2 py-2 hover:bg-slate-900/90"
            >
              <img
                src={`${baseImageurl}${movie?.backdrop_path}`}
                alt="img"
              />
              <h1>{movie.title}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
