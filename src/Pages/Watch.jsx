import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetails } from "../react-query/queries";

import MoviePlayer from "../Components/MoviePlayer";
import Description from "../Components/Description";

const Watch = () => {
  const { id } = useParams();
  const { data: details, isPending } = useGetDetails(id);
  const [show, setshow] = useState(false);
  const title = details?.title ?? "No Title";
  const backdropPath = details?.backdrop_path ?? "";
  const genres = details?.genres ?? [];
  const overview = details?.overview ?? "";
  const runtime = details?.runtime ?? 0;
  const baseImageurl = "https://image.tmdb.org/t/p/w1280";
  const imageUrl = `${baseImageurl}${backdropPath}`;
  const videoUrl = `https://vidsrc.to/embed/movie/${id}`;

  console.log(id, details);

  if (isPending) {
    return <div>Loading.....</div>;
  }

  return (
    <div className=" overflow-y-scroll overflow-x-hidden h-full">
      <div
        className={` w-full  h-max relative ${
          show ? "flex flex-col items-center justify-center" : ""
        }`}
      >
        <img src={imageUrl} />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-98"></div>
        {/* movie component */}
        {show ? (
          <MoviePlayer videoUrl={videoUrl} />
        ) : (
          <Description
            title={title}
            overview={overview}
            setshow={setshow}
          />
        )}
      </div>
    </div>
  );
};

export default Watch;

//description
{
  /* <div className=" absolute w-[500px]   rounded-tr-lg  bg-primary-dark/60  py-3 px-6  bottom-0">
          <div className=" flex  space-y-2 flex-col items-start w-max-[400px]">
            <h1>{title}</h1>
            <p className=" text-sm text-slate-400  font-thin">{overview}</p>
            <button
              onClick={() => setshow(true)}
              className=" text-base flex items-center space-x-2 bg-dark-purple  py-1 px-2  rounded-lg"
            >
              <p>watch now</p>
              <CiPlay1 size={20} />
            </button>
          </div>
        </div> */
}
