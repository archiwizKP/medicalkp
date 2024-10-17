// material-ui
import { Box, Typography } from "@mui/material";

// project import
import NavGroup from "./NavGroup";
import useMenuItems from "../../../../../menu-items";

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const menuItems = useMenuItems(); // Call the custom hook to get menu items

  const navGroups = menuItems.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
