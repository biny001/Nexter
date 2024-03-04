import React, { useContext, useState } from "react";
import { movieContext } from "../Context/MovieContextProvider";

const Search = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  const { searchQuery, setSearchQuery, handleSearch } =
    useContext(movieContext);

  const handleFocus = (e) => {
    e.target.style.width = "200px";
  };
  const handleBlur = (e) => {
    e.target.style.width = "150px";
  };

  return (
    <div className="absolute flex  top-4  z-[30] items-center    right-[20px] ">
      <form
        onSubmit={handleSearch}
        className="flex  relative items-center w-full  "
      >
        <input
          className=" w-[200px]   transition-transform duration-300  ease-in-out    border-light-purple border-[1px] rounded-[60px] bg-transparent  text-primary-purple  py-1 text-sm px-3 outline-none"
          placeholder="search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className=" absolute right-1 ">
          <img src="src\assets\images\search.svg" />
        </button>
      </form>
    </div>
  );
};

export default Search;
