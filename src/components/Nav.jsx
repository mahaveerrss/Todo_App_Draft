import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full h-1/6 flex justify-around items-center">
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? "text-white font-bold  px-2 rounded-md bg-green-500"
            : "text-white font-bold  px-2 rounded-md bg-slate-500 hover:bg-green-600";
        }}
        to={"todos"}
      >
        Todos
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? "text-white font-bold  px-2 rounded-md bg-green-500"
            : "text-white font-bold  px-2 rounded-md bg-slate-500  hover:bg-green-600";
        }}
        to={"drafts"}
      >
        Drafts
      </NavLink>
    </div>
  );
}

export default Nav;
