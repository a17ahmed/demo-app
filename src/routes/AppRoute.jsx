import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./public/PublicRoute";
import PrivateRoute from "./private/PrivateRoute";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoute />} />
        <Route path="/property*" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
