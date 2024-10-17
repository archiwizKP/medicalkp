// material-ui
import React, { useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { TabClicked } from "../../../../store/reducers/tab";
// ==============================|| HEADER CONTENT - SEARCH ||============================== //
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{}}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CustomTab() {
  const dispatch = useDispatch();

  const tabIndex = useSelector((state) => state.HeaderTab);

  console.log("I am tabindex in the tabs: ", tabIndex);

  const [value, setValue] = React.useState(tabIndex.index);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(TabClicked(newValue));
    console.log(newValue);
  };

  // When the Tab index is changed assign the value from the redux global state
  useEffect(() => {
    setValue(tabIndex.index);
    console.log("Set Value in UseEffect: ", value);
  }, [tabIndex]);

  // Check who is logged in
  const loginInfo = {
    isLogin: true,
    role: "Operator",
  };

  return (
    <Box sx={{ width: "100%", ml: 10 }}>
      <Box
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        {loginInfo.isLogin && loginInfo.role === "Operator" ? (
          <></>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab spacing={4} label="2D" />
            <Tab spacing={4} label="3D" />
            <Tab spacing={4} label="Wire Frame" />
          </Tabs>
        )}
      </Box>
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
