import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />; // Redirect to login if not authenticated

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
