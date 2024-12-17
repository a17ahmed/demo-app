import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../layouts/Main";
import Dashboard from "@/pages/Dashboard";
import BlackBook from "@/pages/BlackBook";

const LoginPage = lazy(() => import("@/pages/Login"));

// import LoginPage from '../../pages/Login'

const PublicRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/checkverse" element={<Main />}>
          {/* Dynamic routes rendered in the Main layout */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="black_book" element={<BlackBook />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PublicRoute;
