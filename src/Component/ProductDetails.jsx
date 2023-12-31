import React from "react";
import TopProducts from "./products/TopProducts";
import FeatProduct from "./products/FeatProduct";
import ImitationProduct from "./products/ImitationProduct";

export default function ProductDetails() {
  const pageRef = React.useRef();
  React.useEffect(() => {
    pageRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div ref={pageRef}>
      <div className="text-2xl font-semibold text-center p-5 text-[#da9d1d] bg-white animate-pulse">
        Shop Online With Nayanika Jewellery
      </div>
      <div className="text-2xl font-semibold text-center p-5 text-[#da9d1d]">
        Imitation Products
      </div>
      <div className="boxShadow mb-5 mx-2">
        <ImitationProduct location={"productDetails"} />
      </div>
      <div className="text-2xl font-semibold text-center p-5 text-[#da9d1d]">
        Feature Products
      </div>
      <div className="boxShadow mb-5 mx-2">
        <FeatProduct location={"productDetails"} />
      </div>
      <div className="text-2xl font-semibold text-center p-5 text-[#da9d1d]">
        Top Products
      </div>
      <div className="mb-5 boxShadow mx-2">
        <TopProducts location={"productDetails"} />
      </div>
    </div>
  );
}
