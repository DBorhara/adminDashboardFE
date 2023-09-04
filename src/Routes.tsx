import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

interface AppRouteProps {}

const AppRoutes: React.FC<AppRouteProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/newUser" element={<NewUser />} />
    </Routes>
  );
};

export default AppRoutes;
