import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="font-medium shadow-xl py-3 bg-[#da9d1d9e]">
        <div className="flex flex-col md:flex-row md:justify-between mx-3 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#464d47] to-[#070073]">
          <div
            className="text-center md:text-lg cursor-pointer"
            onClick={() => navigate("/")}
          >
            Nayanika Jwellery
          </div>
          <div className="flex justify-center md:justify-end">
            <ul className="list-none flex gap-8 mx-8">
              {/* <li className="font-normal cursor-pointer hover:text-white">
                Category
              </li> */}
              <li className="font-normal cursor-pointer hover:text-white">
                About us
              </li>
              <li className="font-normal cursor-pointer hover:text-white">
                contact us
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="py-2 flex justify-between bg-deep-purple-300 md:hidden">
        <span className="mx-3">About us</span>
        <span className="mx-3">Contact us</span>
      </div> */}
      {/* <footer className="px-5 absolute bottom-5 left-20 border-t border-gray-500">
        <div className="font-light text-md ">Footer section</div>
        <div className="font-light text-md ">@2023 All right reserved.</div>
      </footer> */}
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
