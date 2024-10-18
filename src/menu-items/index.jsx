import { useSelector } from "react-redux";
import dashboard from "./dashboard";
import OperatorMenu from "./operator";
import { useEffect, useState } from "react";

const useMenuItems = () => {
  const userData = useSelector((state) => state.auth.user);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Retrieve and parse the user data from localStorage if userData is not available
    const storedUser = localStorage.getItem("auth");
    const user = userData || (storedUser && JSON.parse(storedUser));
    setUser(user);
    console.log("I am user in index routes page: ", user);
  }, [userData]);

  console.log("I am user in index routes page: ", user);

  const menuItems = {
    items: [
      user && user.token && user.data.role === "operator"
        ? OperatorMenu
        : dashboard,
    ],
  };

  return menuItems;
};

export default useMenuItems;
