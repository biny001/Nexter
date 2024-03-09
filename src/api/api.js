import { authkey } from "./config.js";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${authkey}`,
  },
};

//Trending movies
export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies. Status: ${response.status}`);
    }

    const { results } = await response.json();
    // console.log(results);
    return results;
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};
//Details
export const fetchDetails = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    if (!response.ok)
      throw new Error(`Failed to fetch details. Status: ${response.status}`);
    const detail = await response.json();
    // console.log(detail);
    return detail;
  } catch (err) {
    console.log(err);
  }
};

//Search
export const searchMovies = async (query) => {
  let searchQuery;

  if (query?.length <= 3) {
    searchQuery = "";
  } else {
    searchQuery = query;
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    );
    if (!res.ok)
      throw new Error(`Failed to fetch search results. Status: ${res.status}`);
    const data = await res.json();
    // console.log(data?.results);
    return data?.results;
  } catch (err) {
    console.log(err);
  }
};
