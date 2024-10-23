// assets
import {
  DashboardOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  DashboardOutlined,
  UserAddOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
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
      id: "All Patients",
      title: "All Patients",
      type: "item",
      url: "/operator/all-patients",
      icon: icons.UsergroupAddOutlined,
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
