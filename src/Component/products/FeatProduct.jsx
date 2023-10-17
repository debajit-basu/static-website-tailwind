import React from "react";
import { featureProducts } from "../../utils";
import PerProduct from "./PerProduct";

const FeatProduct = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-5 md:grid md:grid-cols-2 sm:grid-cols-1 md:gap-4 lg:grid lg:grid-cols-3 text-gridtext lg:gap-4 w-full">
      {featureProducts.map((e) => (
        <PerProduct product={e} key={e.id} from="feat" />
      ))}
    </div>
  );
};

export default FeatProduct;
