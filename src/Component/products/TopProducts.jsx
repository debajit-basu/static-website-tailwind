import React from "react";
import { topProducts } from "../../utils";
import PerProduct from "./PerProduct";

const TopProducts = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center align-center w-full">
      {topProducts.map((e) => (
        <PerProduct product={e} key={e.id} from="top" />
      ))}
    </div>
  );
};

export default TopProducts;
