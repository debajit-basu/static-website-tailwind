import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import ProductList from "./Component/ProductList";
import NoMatch from "./Component/NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
