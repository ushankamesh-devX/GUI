import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import Support from "./pages/support/Support";
import AddItem from "./admin/pages/addItem/AddItem";
import ItemList from "./admin/pages/itemList/ItemList";
import EditItem from "./admin/pages/editItem/EditItem";
import Footer from "./components/footer/Footer";

function App() {
  const Layout = () => {
    const location = useLocation();

    const hideNavbarPaths = ["/login", "/register"];

    return (
      <div>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store/:storeCategory" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
          <Route path="/admin" element={<ItemList/>} />
          <Route path="/admin/add" element={<AddItem/>} />
          <Route path="/admin/edit/:id" element={<EditItem/>} />
        </Routes>
        <Footer/>
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
