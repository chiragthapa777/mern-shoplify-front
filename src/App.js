import React,{ useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import Product from "./pages/product/Product";
import FilteredProducts from "./pages/filteredProducts/FilteredProducts";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

export default function App() {
  const user = true;
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {user && (
            <Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          )}
          <Route path="/" element={<Home />} />
          <Route>
             <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products" element={<FilteredProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
