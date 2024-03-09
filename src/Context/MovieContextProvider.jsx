import { createContext, useState } from "react";
import { useSearchMovie } from "../react-query/queries";

export const movieContext = createContext();

const MovieContexProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: searchResults, isPending } = useSearchMovie(searchQuery);
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    // console.log(searchQuery);
    // console.log(searchResults);
    setResults(searchResults);
  }

  return (
    <movieContext.Provider
      value={{ searchQuery, setSearchQuery, handleSearch, results }}
    >
      {children}
    </movieContext.Provider>
  );
};
export default MovieContexProvider;
