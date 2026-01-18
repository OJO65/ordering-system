import { Routes, Route } from "react-router-dom";
import Home from "../features/home/Home";
import Shop from "../features/products/ProductsPage";
import Cart from "../features/cart/CartPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
