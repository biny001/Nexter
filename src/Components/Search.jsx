import React, { useContext, useEffect, useRef, useState } from "react";
import { movieContext } from "../Context/MovieContextProvider";
import SearchResults from "./SearchResults";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { searchQuery, setSearchQuery, handleSearch } =
    useContext(movieContext);
  const [showResults, setShowResults] = useState(true);
  const containerRef = useRef(null);

  const handleFocus = (e) => {
    e.target.style.width = "100%";
    e.target.style.border = "none";
    setShowResults(true);
  };
  const handleBlur = (e) => {
    e.target.style.width = "100%";
    e.target.style.border = "1px solid #7900C2";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="absolute flex  max-w-[300px]    flex-col top-4  z-[30] items-center    right-[20px] "
    >
      <form
        onSubmit={handleSearch}
        className="flex  relative items-center w-full  "
      >
        <input
          className=" w-[200px]    transition-transform duration-300  ease-in-out    border-light-purple border-[1px] rounded-[60px] bg-transparent   text-slate-50  py-1 text-sm font-thin px-3 outline-none"
          placeholder="search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className=" absolute right-1 ">
          <CiSearch
            width={24}
            height={24}
          />
        </button>
      </form>
      {showResults && <SearchResults />}
    </div>
  );
};

export default Search;
