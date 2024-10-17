import { useSelector } from "react-redux";
import dashboard from "./dashboard";
import OperatorMenu from "./operator";

const useMenuItems = () => {
  const userData = useSelector((state) => state.auth.user);

  // Retrieve and parse the user data from localStorage if userData is not available
  const storedUser = localStorage.getItem("auth");
  const user = userData || (storedUser && JSON.parse(storedUser).data);

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
