import { NavLink } from "react-router-dom";

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
          <img
            className=" "
            src="src\assets\images\film.svg"
          />
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
        >
          <img src="src\assets\images\heart.svg" />
          <h1>Favourites</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
          to="/trending"
        >
          <img src="src\assets\images\trending-up.svg" />
          <h1>Trending</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navlink bg-[#1e092a]" : "navlink "
          }
          to="/comingsoon"
        >
          <img src="src\assets\images\calendar.svg" />
          <h1>Coming Soon</h1>
        </NavLink>
      </div>
      <div>
        <div className="flex navlink     gap-2 items-center">
          <img src="src/assets/images/log-out.svg" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
