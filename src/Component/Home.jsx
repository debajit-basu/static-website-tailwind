import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="mx-3 my-5">
      <div className="text-2xl font-semibold text-center p-5 text-teal-500 animate-pulse">
        Shop Online With Nayanika Jewellery
      </div>
      <div className="h-[60vh]">
        <Carousel transition={{ duration: 2 }} className="rounded-xl">
          <img src="/banner1.jpg" alt="image 1" className="h-full w-full" />
          <img
            src="/banner2.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/banner3.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/banner4.jpg"
            alt="image 4"
            className="h-full w-full object-cover"
          />
          <img
            src="/banner5.jpg"
            alt="image 5"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="text-xl font-semibold text-center p-5 text-teal-500">
        Feature Product
      </div>
      <div className="h-[30vh] border border-green-800">card section</div>
    </div>
  );
}
