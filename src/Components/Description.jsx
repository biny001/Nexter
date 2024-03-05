import React from "react";
import { CiPlay1 } from "react-icons/ci";

const Description = ({ title, setshow, overview }) => {
  return (
    <div className=" absolute w-[500px]   rounded-tr-lg  bg-primary-dark/60  py-3 px-6  bottom-0">
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
    </div>
  );
};

export default Description;
