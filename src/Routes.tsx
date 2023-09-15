import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

/**
 * Interface for AppRoutes component props
 */
interface AppRoutesProps {
  isLoggedIn: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isLoggedIn }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
