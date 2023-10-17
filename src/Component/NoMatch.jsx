import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="container">
      <div className="flex flex-col my-52">
        <p className="flex justify-center text-xl -center font-semibold">
          Request is invalid...
        </p>
        <p className="flex justify-center cursor-pointer text-blue-500">
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    </div>
  );
}
