import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiFilmSlateLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
const Ressidebar = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsopen(!isopen)}
        className={` z-[10000] absolute cursor-pointer transition-colors duration-300 ease-in-out p-1 rounded-full   hover:bg-purple-900 ${
          isopen ? "left-[130px] z-[100000] top-3" : "left-3 top-3  "
        }`}
      >
        <div className="rounded-full md:hidden  transition-all  duration-300 ease-in-out">
          {isopen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
        </div>
      </div>
      <div
        className={`md:hidden bg-primary-dark absolute h-full z-[1000] transition-all duration-300 ease-in-out px-4 py-10 flex flex-col shadow-right-xl gap-4 ${
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
            <PiFilmSlateLight />
            <h1>Home</h1>
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
          >
            <CiHeart />
            <h1>Favourites</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
            to="/trending"
          >
            <IoIosTrendingUp />
            <h1>Trending</h1>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navlink bg-[#1e092a]" : "navlink"
            }
            to="/comingsoon"
          >
            <CiCalendar />
            <h1>Coming Soon</h1>
          </NavLink>
        </div>
        <div>
          <div className="flex navlink gap-2 items-center">
            <IoIosLogOut />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ressidebar;
