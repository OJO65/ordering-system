import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { ProductProvider } from './context/Context';
import Cart from "./pages/Cart/Cart";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <ProductProvider>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/cart" element={<Cart />}/>
      </Routes>
      </BrowserRouter>
      </ProductProvider>
      <Footer />
    </div>
  );
}

export default App;
