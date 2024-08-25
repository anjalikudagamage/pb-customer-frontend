import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants.ts";
import LoginPage from "../components/pages/LoginPage/index.tsx";
import HomePage from "../components/pages/HomePage/index.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
       <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
