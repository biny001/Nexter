import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Ressidebar from "./RessideBar";
import Search from "./Search";

const AppLayout = () => {
  return (
    <div className="h-screen relative grid grid-cols-5 gap-4">
      <div className="hidden md:block md:col-span-1 ">
        <Sidebar />
      </div>

      <Ressidebar />

      <Search />

      <div className="col-span-5 md:col-span-4  bg-black ">
        <div className=" flex items-center justify-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
