import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import ProductList from "./Component/ProductList";
import NoMatch from "./Component/NoMatch";
import Policy from "./Component/Policy";
import TermCondition from "./Component/TermCondition";
import ProductDetails from "./Component/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductList />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms-conditions" element={<TermCondition />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
