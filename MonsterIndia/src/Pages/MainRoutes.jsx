import React from "react";
import { Route, Routes } from "react-router-dom";
import CareerPage from "./Career/CareerPage";
import HomePage from "./Home/HomePage";
import JobPage from "./JobPage";
import Login from "./Login";
import Premium_Services from './Premium_Services';
import Signup from "./Signup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobDescription" element={<JobPage />} />
      <Route path="/careerPage" element={<CareerPage />} />

      <Route path="/premium" element = {<Premium_Services/>} />

      
      <Route path="/signup" element = {<Signup/>} />


    </Routes>
  );
};

export default MainRoutes;
