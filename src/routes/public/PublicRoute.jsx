import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/Login"));

// import LoginPage from '../../pages/Login'

const PublicRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default PublicRoute;
