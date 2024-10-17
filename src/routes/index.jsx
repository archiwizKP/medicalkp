import { useNavigate, useRoutes, Navigate, Outlet } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// project import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";
import MinimalLayout from "../layout/MinimalLayout";
import Stroke from "../pages/stroke";
import NIHHSS from "../pages/nihhss";
import StrokeTrail from "../pages/stroke_trail";
import Priorities from "../pages/priorities";
import Communication from "../pages/comminication";
import OperatorDashboard from "../pages/dashboard/OperatorDashboard";
import AddPatient from "../pages/operator/add-patient";
import OperatorDashboardHome from "../pages/operator/home";
import NotFound from "../pages/authentication/notFound";
import config from "../config";
import AddCategory from "../pages/operator/add-category";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));

// render - utilities
const Color = Loadable(
  lazy(() => import("../pages/components-overview/Color"))
);

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);

function CustomRoute() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Retrieve and parse the user data from localStorage if userData is not available
    const storedUser = localStorage.getItem("auth");
    const user = userData || (storedUser && JSON.parse(storedUser).data);
    setUser(user);
    console.log("I am user in index routes page: ", user);
  }, [userData]);

  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/login" />, // Default path redirects to login
        },
        {
          path: "color",
          element: <Color />,
        },
        {
          path: "login",
          element: <AuthLogin />,
        },
        {
          path: "register",
          element: <AuthRegister />,
        },
        {
          path: "dashboard",
          children: [
            {
              path: "default",
              element: <DashboardDefault />,
            },
            {
              path: "register",
              element: <AuthRegister />,
            },
            {
              path: "login",
              element: <AuthLogin />,
            },
          ],
        },
        // Remove the catch-all NotFound route here
      ],
    },
  ]);

  const DefaultRoutes = useRoutes([
    {
      path: "/",
      element: <MinimalLayout />,
      children: [
        {
          index: true,
          element:
            user && user.token ? (
              <Navigate to="/operator/home" />
            ) : (
              <AuthLogin />
            ), // Redirect logged-in users away from login page
        },
        {
          path: "login",
          element:
            user && user.token ? (
              <Navigate to="/operator/home" />
            ) : (
              <AuthLogin />
            ), // Redirect logged-in users away from login page
        },
        // Remove the catch-all NotFound route here
      ],
    },
    {
      path: "*",
      element: <NotFound />, // Catch-all route for undefined paths
    },
  ]);

  const OperatorRoutes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "operator",
          element: <Outlet />, // Use Outlet to render nested routes
          children: [
            {
              path: "home",
              element: <OperatorDashboardHome />,
            },
            {
              path: "add-patient",
              element: <AddPatient />,
            },
            {
              path: "add-category",
              element: <AddCategory />,
            },
            // Remove the catch-all NotFound route here
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {user && user.token && user.data.role === "operator" ? (
        <>{OperatorRoutes}</>
      ) : (
        <>{DefaultRoutes}</>
      )}
    </>
  );
}

export default CustomRoute;
