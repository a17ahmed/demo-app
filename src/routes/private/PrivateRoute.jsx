import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// const Dashboard = lazy(() => import("@/pages/Dashboard"));

import Dashboard from "../../pages/Dashboard";

const PrivateRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route to="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoute;
