import React from "react";
import { topProducts, homeTopProducts } from "../../utils";
import PerProduct from "./PerProduct";

const TopProducts = ({ location }) => {
  return (
    <div className="flex gap-4 flex-wrap justify-center align-center w-full">
      {location === "productDetails" &&
        topProducts.map((e) => (
          <PerProduct product={e} key={e.id} from="top" location={location} />
        ))}
      {location === "home" &&
        homeTopProducts.map((e) => (
          <PerProduct product={e} key={e.id} from="top" location={location} />
        ))}
    </div>
  );
};

export default TopProducts;
