import React from "react";
import { featureProducts, homeFeatureProducts } from "../../utils";
import PerProduct from "./PerProduct";

const FeatProduct = ({ location }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center align-center w-full">
      {location === "productDetails" &&
        featureProducts.map((e, i) => (
          <PerProduct product={e} key={i} from="feat" location={location} />
        ))}
      {location === "home" &&
        homeFeatureProducts.map((e, i) => (
          <PerProduct product={e} key={i} from="feat" location={location} />
        ))}
    </div>
  );
};

export default FeatProduct;
