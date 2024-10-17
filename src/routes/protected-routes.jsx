import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ requiredRole }) => {
  const userData = useSelector((state) => state.auth.user);
  const storedUser = localStorage.getItem("auth");
  const user = userData || (storedUser && JSON.parse(storedUser).data);

  if (!user || !user.token) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.data.role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
