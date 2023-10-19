import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import TopProducts from "./products/TopProducts";
import FeatProduct from "./products/FeatProduct";

export default function Home() {
  return (
    <div>
      <div className="text-2xl font-semibold text-center p-5 text-[#6b6e70] bg-white animate-pulse">
        Shop Online With Nayanika Jewellery
      </div>
      <div className="h-[80vh]">
        <Carousel transition={{ duration: 2 }}>
          <img
            src="/img1.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/img2.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <img
            src="/img3.jpg"
            alt="image 4"
            className="h-full w-full object-cover"
          />
          <img
            src="/img4.jpg"
            alt="image 5"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="min-h-[20vh] text-center mt-24">
        <p className="mx-5 text-2xl font-thin text-[#6b6e70] flex justify-center">
          The brilliance you deserve
        </p>
        <p className="mt-5 flex font-thin text-sm text-[#6b6e70] mx-24">
          At Nayanika Jewellers, we don’t just craft exquisite jewellery; we
          make memories for a lifetime. Timeless and extravagant – each
          masterpiece is crafted to reflect legacy. Embrace the uniqueness of
          tradition and the evolving trends of modernity as you uphold our
          exclusive range and astound the world.
        </p>
      </div>
      <div className="text-2xl font-semibold text-center p-5 text-[#6b6e70]">
        Feature Products
      </div>
      <div className="boxShadow mb-5 md:ml-14">
        <FeatProduct />
      </div>
      <div className="text-2xl font-semibold text-center p-5 text-[#6b6e70]">
        Top Products
      </div>
      <div className="mb-5 boxShadow md:ml-14">
        <TopProducts />
      </div>
    </div>
  );
}
