import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import Support from "./pages/support/Support";

function App() {
  
  const Layout = () => {
    const location = useLocation();


    const hideNavbarPaths = ["/login", "/register"];

    return (
      <div>
    
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/store/:storeCategory" element={<Store />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/support" element={<Support/>} />
        </Routes>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
