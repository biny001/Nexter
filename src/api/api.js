import { authkey } from "./config.js";
export const options = {
  method: "GET",
  Headers: {
    accept: "application/json",
    Authorization: `Bearer ${authkey}`,
  },
};

export async function getMovies() {
  try {
    const moviedata = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    );
    console.log(moviedata);
    return moviedata;
  } catch (err) {
    console.log("couldnt fetch movie data");
  }
}
