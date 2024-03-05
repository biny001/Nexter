import React from "react";

const MoviePlayer = ({ videoUrl }) => {
  return (
    <div className="absolute  bottom-0">
      <div className=" flex  pb-1 pt-3 items-center justify-center   w-[300px] sm:w-[600px]  sm:h-[60vh] md:w-[600px]  lg:w-[800px] lg:h-[70vh] ">
        <iframe
          src={videoUrl}
          className=" w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;
