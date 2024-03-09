import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { useGetMovie } from "../react-query/queries";
import Hero from "../Components/Hero";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const { data: results, isPending } = useGetMovie();
  const [hero, setHero] = useState(results?.slice(0, 4));
  const baseImageurl = "https://image.tmdb.org/t/p/w200";
  const imageUrl = `${baseImageurl}${results?.[1]?.poster_path}`;

  const heroimage = "https://image.tmdb.org/t/p/w1280";
  const heroUrl = results?.slice(0, 5).map((movie) => ({
    url: `${heroimage}${movie.backdrop_path}`,
    alt: movie.title,
    title: movie.title,
    overview: movie.overview,
    date: movie.release_date,
  }));

  if (isPending) return <div>Loading...</div>;

  return (
    <div className=" flex flex-col   w-full justify-center items-center ">
      <Hero images={heroUrl} />
      <MovieCard
        results={results}
        isPending={isPending}
        baseImageurl={baseImageurl}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default Home;
