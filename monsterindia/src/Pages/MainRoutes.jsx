import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
};

export default MainRoutes;
