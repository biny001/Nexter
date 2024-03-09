import React from "react";
import { IconContext } from "react-icons";

const IconContextProvider = ({ children }) => {
  return (
    <IconContext.Provider
      value={{
        style: { verticalAlign: "middle", width: "32px", height: "32px" },
      }}
    >
      {children}
    </IconContext.Provider>
  );
};

export default IconContextProvider;
