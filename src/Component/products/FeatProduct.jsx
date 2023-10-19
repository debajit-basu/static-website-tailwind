import React from "react";
import { featureProducts } from "../../utils";
import PerProduct from "./PerProduct";

const FeatProduct = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center align-center w-full">
      {featureProducts.map((e, i) => (
        <PerProduct product={e} key={i} from="feat" />
      ))}
    </div>
  );
};

export default FeatProduct;
