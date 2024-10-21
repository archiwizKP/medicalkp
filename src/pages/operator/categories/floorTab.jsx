import React from "react";
// material-ui
import { useEffect, useState } from "react";
// material-ui
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TableHead,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// tables
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import FloorModal from "../../../components/modal/floorModal";
import { GetTowerAPI } from "../../../services/operator-api/towersCrudAPI";
import { AddFloorAPI } from "../../../services/operator-api/floorsCrudApi";

const FloorTab = () => {
  const [token, setToken] = useState("");
  const [floorsData, setFloorsData] = useState([]);
  const [towersData, setTowersData] = useState([]);
  const [selectedId, setSelectedId] = useState({
    selectId: "",
    action: "",
    data: {},
  });
  const [serverResponse, setServerResponse] = useState({
    msg: "",
    res: "",
    authentication: false,
  });
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("auth"));
    if (storedData && storedData.token) {
      console.log("Stored data in add category: ", storedData.token);
      setToken(storedData.token);
    }
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     fetchData();
  //   }
  // }, [token]);

  // fetch the towers
  const fetchTowers = async () => {
    try {
      const response = await GetTowerAPI(token);
      console.log(response);
      if (response) {
        setTowersData(response);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Next Page Code
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Delete Click
  const handleDeleteClick = async (row, action) => {
    setOpen(true);
    console.log("row id: ", row.id);
    console.log("action: ", action.action);
    setSelectedId({ selectId: row.id, action: action.action });
  };

  // Edit Click
  const handleEditClick = async (row, action) => {
    setOpen(true);
    console.log("row id: ", row.id);
    console.log("action: ", action.action);
    setSelectedId({ selectId: row.id, action: action.action, data: row });
  };

  // Close the Modal
  const handleClose = () => {
    setOpen(false);
  };

  // Delete Floor
  const deleteFloor = async () => {
    try {
      const response = await DeleteFloorAPI(selectedId.selectId, token);
      console.log("Delete api response", response);
      if (response.message) {
        const filterfloorsData = floorsData.filter(
          (item) => item.id !== selectedId.selectId
        );
        setFloorsData(filterfloorsData);
      }
    } catch (error) {
      console.log("delete api error", error);
    }
  };

  // Edit Floor
  const editFloor = async () => {
    try {
      const response = await EditFloorAPI(selectedId.selectId, token);
      console.log("Edit api response", response);
      if (response.message) {
        const updatedfloorsData = floorsData.map((item) =>
          item.id === selectedId.selectId ? { ...item, ...response.data } : item
        );
        setFloorsData(updatedfloorsData);
      }
    } catch (error) {
      console.log("edit api error", error);
    }
  };

  // Handle Confirm
  const handleConfirm = async () => {
    setOpen(false);
    if (selectedId.selectId && selectedId.action === "delete") {
      deleteFloor();
    } else if (selectedId.selectId && selectedId.action === "edit") {
      editFloor();
    }
  };

  const handleServerResponse = () => {
    setOpen(false);
    fetchData();
  };

  // onLoad Populate the setTowers state
  useEffect(() => {
    if (token) {
      fetchTowers();
    }
  }, [token]);

  console.log("selected data: ", selectedId.data);
  console.log("Towers data: ", towersData);
  return (
    <>
      {/* Floor Modal */}
      <FloorModal
        open={open}
        onClose={handleClose}
        text="Are you sure you want to delete this record?"
        onConfirm={handleConfirm}
        action={selectedId.action}
        data={selectedId.action === "delete" ? {} : selectedId.data}
        token={token}
        handleServerResponse={handleServerResponse} // Pass the callback
      />
      {/* Floor Add Component */}
      <Box sx={{ width: "100%", mt: 5 }}>
        {/* // ============================|| Add Patient ||============================ // */}
        <Formik
          initialValues={{
            floorName: "",

            submit: null,
          }}
          validationSchema={Yup.object().shape({
            floorName: Yup.string()
              .matches(/^\d+$/, "Please enter only numbers")
              .required("Floor is required"),
          })}
          onSubmit={async (values, { setStatus, resetForm }) => {
            console.log(values);

            try {
              const response = await AddFloorAPI(values, token);
              console.log("response in add cat page", response);

              if ((response.status === 400) | (response.status === 500)) {
                setServerResponse({
                  authentication: false,
                  msg: response.data.message,
                });
              } else {
                setServerResponse({
                  authentication: true,
                  msg: response.message,
                  res: response,
                });
                setStatus(true);
                // empty the field
                resetForm();
                // update the data
                fetchData();
              }
            } catch (err) {
              setServerResponse({
                authentication: false,
                msg: "Something went wrong. Please try again.",
              });
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item md={3.5} xs={12} sx={{ mb: 2 }}>
                  {/* Display the server response message */}
                  {serverResponse.msg ? (
                    <Alert
                      variant="filled"
                      severity={
                        serverResponse.authentication ? "success" : "error"
                      }
                      onClose={() => {
                        setServerResponse({ ...serverResponse, msg: "" });
                      }}
                    >
                      {serverResponse.msg}
                    </Alert>
                  ) : (
                    <></>
                  )}
                </Grid>

                {/* Tower */}
                <Grid item md={12} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.tower && errors.tower)}
                  >
                    <InputLabel id="tower-select-label">
                      Select Tower
                    </InputLabel>
                    <Select
                      labelId="tower-select-label"
                      id="tower-login"
                      value={values.tower}
                      name="tower"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Tower"
                    >
                      {towersData.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                      {/* Add more MenuItem components as needed */}
                    </Select>
                    {touched.tower && errors.tower && (
                      <FormHelperText>{errors.tower}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                {/* Floor */}
                <Grid item md={12} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="floorName-login">Floor</InputLabel>
                    <OutlinedInput
                      id="floorName-login"
                      type="text"
                      value={values.floorName}
                      name="floorName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Floor"
                      fullWidth
                      error={Boolean(touched.floorName && errors.floorName)}
                    />
                    {touched.floorName && errors.floorName && (
                      <FormHelperText error>{errors.floorName}</FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item md={1} xs={12}>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {isSubmitting ? "Adding" : "Add"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
      {/* Table */}
      <Box sx={{ width: "100%", mt: 15 }}>
        <Typography variant="h5" component="div" sx={{ mb: 3 }} gutterBottom>
          All Floors
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size="medium"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ px: 3 }}>ID</TableCell>
                    <TableCell align="right" sx={{ px: 3 }}>
                      Floor
                    </TableCell>
                    <TableCell align="right" sx={{ px: 3 }}>
                      Created At
                    </TableCell>
                    <TableCell align="right" sx={{ px: 3 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {floorsData
                    ? floorsData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            hover
                            key={row.id}
                            sx={{ cursor: "pointer" }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{ px: 3 }}
                            >
                              {row.id}
                            </TableCell>
                            <TableCell align="right" sx={{ px: 3 }}>
                              {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ px: 3 }}>
                              {row.createdAt}
                            </TableCell>
                            <TableCell align="right" sx={{ px: 3 }}>
                              <Button
                                variant="contained"
                                color="success"
                                sx={{ ml: 2 }}
                                onClick={() =>
                                  handleEditClick(row, {
                                    action: "edit",
                                  })
                                }
                              >
                                Edit
                              </Button>
                              <Button
                                variant="contained"
                                color="error"
                                sx={{ ml: 2 }}
                                onClick={() =>
                                  handleDeleteClick(row, {
                                    action: "delete",
                                  })
                                }
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                    : {}}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={floorsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default FloorTab;
