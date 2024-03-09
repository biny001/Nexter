import React, { useEffect, useState } from "react";
import { formatYear } from "../utils/utility";

const Hero = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images?.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full overflow-y-hidden">
      <img
        src={images?.[currentImageIndex].url}
        alt={images?.[currentImageIndex].alt}
        className="w-full object-cover object-center h-[300px] md:h-[400px] lg:h-[500px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-98"></div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-all ease-in-out duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-105 -translate-y-1"
                : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      {/* Title, Overview, and Date */}
      <h1 className=" absolute left-[10%] sm:top-[40%] top-[30%] md:text-2xl sm:text-xl text-lg">
        {images?.[currentImageIndex].title} (
        {formatYear(images?.[currentImageIndex].date)})
      </h1>
      <p className="py-2 absolute left-[10%] top-[40%] sm:top-[50%] text-gray-300   text-xs md:text-sm lg:text-base xl:text-lg max-w-[80%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[70%] whitespace-normal overflow-auto">
        {images?.[currentImageIndex].overview}
      </p>
    </div>
  );
};

export default Hero;
