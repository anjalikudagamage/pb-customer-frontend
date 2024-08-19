import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants.ts";
import HomePage from "../components/pages/HomePage/index.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
