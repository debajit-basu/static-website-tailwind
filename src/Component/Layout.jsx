import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen bg-amber-50">
      <div className="font-medium shadow-xl py-3 bg-amber-50">
        <div className="flex justify-between mx-3 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-pink-600">
          <div className="text-lg">Nayanika jwellery</div>
          <div className="flex justify-end">
            <ul className="list-none flex gap-8 mx-8">
              <li className="font-normal cursor-pointer hover:text-violet-600">
                Category
              </li>
              <li className="font-normal cursor-pointer hover:text-violet-600">
                About us
              </li>
              <li className="font-normal cursor-pointer hover:text-violet-600">
                contact us
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <footer className="px-5 absolute bottom-5 left-20 border-t border-gray-500">
        <div className="font-light text-md ">Footer section</div>
        <div className="font-light text-md ">@2023 All right reserved.</div>
      </footer> */}
      <Outlet />
    </div>
  );
}
