import { useState } from "react";
import { NavLink } from "react-router-dom";

const Ressidebar = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsopen(!isopen)}
        className={`absolute cursor-pointer transition-colors duration-300 ease-in-out p-1 rounded-full   hover:bg-purple-900 ${
          isopen ? "left-[130px] z-[1000] top-3" : "left-3 top-3  "
        }`}
      >
        <img
          className=" rounded-full md:hidden  transition-all  duration-300 ease-in-out"
          src={`${
            isopen
              ? "src/assets/images/cancel-x.svg"
              : "src/assets/images/burger-menu.svg"
          }`}
        />
      </div>
      <div
        className={`md:hidden bg-primary-dark absolute h-full z-[500] transition-all duration-300 ease-in-out px-4 py-10 flex flex-col shadow-right-xl gap-4 ${
          isopen ? "left-0" : "-left-full absolute"
        }`}
      >
        <h1 className="text-xl p-1 sm:mb-5">Nexter</h1>
        <div className="flex flex-col flex-grow gap-3 w-full">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
            to="/"
          >
            <img
              className=""
              src="src/assets/images/film.svg"
            />
            <h1>Home</h1>
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
          >
            <img src="src/assets/images/heart.svg" />
            <h1>Favourites</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
            to="/trending"
          >
            <img src="src/assets/images/trending-up.svg" />
            <h1>Trending</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
            to="/comingsoon"
          >
            <img src="src/assets/images/calendar.svg" />
            <h1>Coming Soon</h1>
          </NavLink>
        </div>
        <div>
          <div className="flex navlink gap-2 items-center">
            <img src="src/assets/images/log-out.svg" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ressidebar;
