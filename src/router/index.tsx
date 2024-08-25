import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants.ts";
import HomePage from "../components/pages/HomePage/index.tsx";
import PhotographerDetailsPage from "../components/pages/PhotographerPage/index.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
        <Route path={ROUTES.PHOTOGRAPHER} element={<PhotographerDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
