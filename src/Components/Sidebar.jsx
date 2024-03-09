import { NavLink } from "react-router-dom";
import { PiFilmSlateLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="hidden h-full   md:flex md:flex-col md:px-8 md:py-10 gap-4   ">
      <h1 className=" text-2xl p-1 sm:mb-5">Nexter</h1>
      <div className=" flex flex-col flex-grow gap-3 w-full">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
          to="/"
        >
          <PiFilmSlateLight />
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
        >
          <CiHeart />
          <h1>Favourites</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
          to="/trending"
        >
          <IoIosTrendingUp />
          <h1>Trending</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
          to="/comingsoon"
        >
          <CiCalendar />
          <h1>Coming Soon</h1>
        </NavLink>
      </div>
      <div>
        <div className="flex navlink     gap-2 items-center">
          <IoIosLogOut />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
