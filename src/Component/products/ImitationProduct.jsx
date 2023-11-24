import React from "react";
import { homeImitationProduct, imitationProduct } from "../../utils";
import PerProduct from "./PerProduct";

const ImitationProduct = ({ location }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center align-center w-full">
      {location === "productDetails" &&
        imitationProduct.map((e, i) => (
          <PerProduct
            product={e}
            key={i}
            from="imitation"
            location={location}
          />
        ))}
      {location === "home" &&
        homeImitationProduct.map((e, i) => (
          <PerProduct
            product={e}
            key={i}
            from="imitation"
            location={location}
          />
        ))}
    </div>
  );
};

export default ImitationProduct;
