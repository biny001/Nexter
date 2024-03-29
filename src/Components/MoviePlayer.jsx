import React from "react";

const MoviePlayer = ({ videoUrl }) => {
  return (
    <div className="absolute   bottom-0 md:top-10 w-full h-max ">
      <div className=" flex  pt-6 items-center justify-center    w-full   h-[50vh]  sm:h-[65vh] md:h-[70vh] lg:h-[80vh]   ">
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
