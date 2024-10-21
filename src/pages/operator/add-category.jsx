import React from "react";
// material-ui
import { useEffect, useState } from "react";
// material-ui
import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TableHead,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// modal

// assets
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// dialog
import { a11yProps, CustomTabPanel } from "../../components/tab";
import TowerTab from "./categories/towerTab";
import LevelTab from "./categories/levelTab";

const AddCategory = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tower" {...a11yProps(0)} />
            <Tab label="Floor" {...a11yProps(1)} />
            <Tab label="Chamber" {...a11yProps(2)} />
            <Tab label="Bed" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* Tower */}
        <CustomTabPanel value={value} index={0}>
          <TowerTab />
        </CustomTabPanel>
        {/* Level */}
        <CustomTabPanel value={value} index={1}>
          <LevelTab />
        </CustomTabPanel>
        {/* Chamber */}
        <CustomTabPanel value={value} index={2}>
          Chamber
        </CustomTabPanel>
        {/* Bed */}
        <CustomTabPanel value={value} index={3}>
          Bed
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default AddCategory;
