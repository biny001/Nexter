import { authkey } from "./config.js";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${authkey}`,
  },
};
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
    console.log(results);
    return results;
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
};

export const fetchDetails = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    if (!response.ok)
      throw new Error(`Failed to fetch details. Status: ${response.status}`);
    const detail = await response.json();
    console.log(detail);
    return detail;
  } catch (err) {
    console.log(err);
  }
};
