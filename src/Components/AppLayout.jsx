import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Ressidebar from "./RessideBar";

const AppLayout = () => {
  return (
    <div className="h-screen relative grid grid-cols-5 gap-4">
      <div className="hidden md:block md:col-span-1 ">
        <Sidebar />
      </div>

      <Ressidebar />

      <div className="col-span-5 md:col-span-4  bg-black ">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
