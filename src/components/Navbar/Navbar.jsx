import React from "react";
import { FcWorkflow } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="h-20 grid z-20">
      <nav className="flex justify-between items-center">
        <div className="logo flex gap-2 items-center">
          <FcWorkflow className="text-4xl" />
          <h1 className="text-3xl font-bold text-white cursor-pointer">
            Talent
          </h1>
        </div>
        <div className="menu">
          <div className="menu_cont flex md:flex-row gap-8">
            <ul className=" flex items-center md:flex-row gap-8 nav_list list-none">
              <li className="cursor-pointer">
                <a
                  href=""
                  className="text-white  hover:text-lime-200 hover:underline cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href=""
                  className="text-white hover:text-lime-200 hover:underline cursor-pointer"
                >
                  Jobs
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href=""
                  className="text-white hover:text-lime-200 hover:underline cursor-pointer"
                >
                  Categories
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href=""
                  className="text-white hover:text-lime-200 hover:underline cursor-pointer"
                >
                  Resource
                </a>
              </li>
            </ul>
            <button className="border-none text-white bg-slate-600 p-2 rounded-lg hover:text-lime-200 hover:bg-transparent hover:border hover:border-lime-200">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
