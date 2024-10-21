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
import Login from "../pages/authentication/Login";
import Loader from "../components/Loader";
import { Box } from "@mui/material";

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
  const userData = useSelector((state) => state.auth.user);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve and parse the user data from localStorage if userData is not available
    const storedUser = localStorage.getItem("auth");
    const user = userData || (storedUser && JSON.parse(storedUser));
    setUser(user);
    setLoading(false);
    console.log("I am user in index routes page: ", user);
  }, [userData]);

  const DoctorRoutes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
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
          path: "doctor",
          children: [
            {
              path: "home",
              element: <DashboardDefault />,
            },
            {
              path: "stroke",
              element: <Stroke />,
            },
            {
              path: "nihhss",
              element: <NIHHSS />,
            },
            {
              path: "strokeTrail",
              element: <StrokeTrail />,
            },
            {
              path: "priorities",
              element: <Priorities />,
            },
            {
              path: "communication",
              element: <Communication />,
            },
            {
              path: "register",
              element: <AuthRegister />,
            },
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />, // Catch-all route for undefined paths
    },
  ]);

  const DefaultRoutes = useRoutes([
    {
      path: "/",
      element: <MinimalLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
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
              index: true,
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
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />, // Catch-all route for undefined paths
    },
  ]);

  if (loading) {
    return (
      <Box>
        <Loader />;
      </Box>
    );
  }

  return (
    <>
      {user && user.token && user.data.role === "operator" ? (
        <>{OperatorRoutes}</>
      ) : user && user.token && user.data.role === "doctor" ? (
        <>{DoctorRoutes}</>
      ) : (
        <>{DefaultRoutes}</>
      )}
    </>
  );
}

export default CustomRoute;
