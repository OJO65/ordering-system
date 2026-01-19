import { Routes, Route } from "react-router-dom";
import Home from "../features/public/home/HomePage";
import Shop from "../features/protected/shop/ProductsPage";
import Cart from "../features/protected/cart/CartPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
