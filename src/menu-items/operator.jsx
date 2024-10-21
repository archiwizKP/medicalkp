// assets
import {
  DashboardOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  DashboardOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
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
      icon: icons.DashboardOutlined,
      breadcrumbs: true,
    },
    {
      id: "Patients",
      title: "Add Patient",
      type: "item",
      url: "/operator/add-patient",
      icon: icons.UserAddOutlined,
      breadcrumbs: true,
    },
    {
      id: "Category",
      title: "Add Category",
      type: "item",
      url: "/operator/add-category",
      icon: icons.PlusCircleOutlined,
      breadcrumbs: true,
    },
  ],
};

export default OperatorMenu;
