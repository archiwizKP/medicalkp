// assets
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Person2Outlined } from "@mui/icons-material";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  WidgetsOutlinedIcon,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const OperatorMenu = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "Dashboard",
      title: "Dashboard",
      type: "item",
      url: "/operator/home",
      icon: icons.WidgetsOutlinedIcon,
      breadcrumbs: true,
    },
    {
      id: "Patients",
      title: "Add Patient",
      type: "item",
      url: "/operator/add-patient",
      icon: icons.UserOutlined,
      breadcrumbs: true,
    },
    {
      id: "Category",
      title: "Add Category",
      type: "item",
      url: "/operator/add-category",
      icon: icons.UserOutlined,
      breadcrumbs: true,
    },
  ],
};

export default OperatorMenu;
