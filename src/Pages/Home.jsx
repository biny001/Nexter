import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { useGetMovie } from "../react-query/queries";
import Hero from "../Components/Hero";
import MovieCard from "../Components/MovieCard";
import SkeletonCardItem from "../Components/SkeletonCardItem";
import SkeletonHero from "../Components/SkeletonHero";

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

  // if (isPending) return <div>Loading...</div>;

  return (
    <div
      className={`flex flex-col w-full justify-center items-center overflow-x-hidden  ${
        isPending ? "" : ""
      }`}
    >
      {isPending ? <SkeletonHero /> : <Hero images={heroUrl} />}
      {/* Pass isPending to MovieCard component */}

      {isPending ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 overflow-x-hidden">
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCardItem key={index} />
          ))}
        </div>
      ) : (
        <MovieCard
          results={results}
          isPending={isPending}
          baseImageurl={baseImageurl}
          imageUrl={imageUrl}
        />
      )}
    </div>
  );
};

export default Home;
