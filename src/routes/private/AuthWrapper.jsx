import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Example authentication logic
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default Private;
