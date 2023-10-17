import React from "react";

export default function Loading() {
  return (
    <div className="mx-3 my-1 relative">
      <div
        className="w-32 h-24 border-solid border-2
         border-slate-300 shadow-xl bg-slate-700
         rounded-xl absolute top-52 left-[48%] translate-x-[-50%] animate-pulse"
      >
        <p className="text-center my-8 font-semibold text-white">Loading</p>
      </div>
    </div>
  );
}
