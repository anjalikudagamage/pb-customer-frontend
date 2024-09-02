import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ROUTES } from "../constants/routeConstants.ts";
import LoginPage from "../components/pages/LoginPage/index.tsx";
import HomePage from "../components/pages/HomePage/index.tsx";
import PhotographerDetailsPage from "../components/pages/PhotographerPage/index.tsx";
import SearchResult from "../components/pages/SearchResultPage/index.tsx";
import HeavenBookingForm from "../components/pages/PackageBookingPage/index.tsx";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
        <Route
          path={ROUTES.PHOTOGRAPHER}
          element={<PhotographerDetailsPage />}
        />
        <Route path={ROUTES.SEARCHRESULT} element={<SearchResult />} />
        <Route path={ROUTES.BOOKING} element={<HeavenBookingForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
