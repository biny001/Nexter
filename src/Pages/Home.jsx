import React, { useEffect } from "react";
import { options } from "../api/api";

const Home = () => {
  useEffect(() => {
    async function getMovies() {
      try {
        const moviedata = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
          options
        );
        console.log(moviedata);
        return moviedata;
      } catch (err) {
        console.log("couldnt fetch movie data", err);
      }
    }

    getMovies();
  }, []);

  return <div>home</div>;
};

export default Home;
