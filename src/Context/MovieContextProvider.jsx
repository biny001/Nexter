import { createContext, useState } from "react";

export const movieContext = createContext();

const MovieContexProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
  }

  return (
    <movieContext.Provider
      value={{ searchQuery, setSearchQuery, handleSearch }}
    >
      {children}
    </movieContext.Provider>
  );
};
export default MovieContexProvider;
