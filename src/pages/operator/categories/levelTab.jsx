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
import { GetTowerAPI } from "../../../services/operator-api/towersCrudAPI";
import {
  AddLevelAPI,
  DeleteLevelAPI,
  EditLevelAPI,
  GetLevelAPI,
} from "../../../services/operator-api/levelCrudApi";
import LevelModal from "../../../components/modal/levelModal";

const LevelTab = () => {
  const [token, setToken] = useState("");
  const [levelsData, setLevelsData] = useState([]);
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

  // fetch the towers
  const fetchTowers = async () => {
    try {
      const response = await GetTowerAPI(token);
      console.log(response);
      if (response) {
        setTowersData(response.data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  //  fetch levels
  const fetchLevels = async () => {
    try {
      const response = await GetLevelAPI(token);
      console.log(response);
      if (response) {
        setLevelsData(response.data);
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

  //   Delete level
  const deleteLevel = async () => {
    try {
      const response = await DeleteLevelAPI(selectedId.selectId, token);
      console.log("Delete api response", response);
      if (response.message) {
        const filterlevelsData = levelsData.filter(
          (item) => item.id !== selectedId.selectId
        );
        setLevelsData(filterlevelsData);
      }
    } catch (error) {
      console.log("delete api error", error);
    }
  };

  //   Edit level
  const editLevel = async () => {
    try {
      const response = await EditLevelAPI(selectedId.selectId, token);
      console.log("Edit api response", response);
      if (response.message) {
        const updatedlevelsData = levelsData.map((item) =>
          item.id === selectedId.selectId ? { ...item, ...response.data } : item
        );
        setLevelsData(updatedlevelsData);
      }
    } catch (error) {
      console.log("edit api error", error);
    }
  };

  //   Handle Confirm
  const handleConfirm = async () => {
    setOpen(false);
    if (selectedId.selectId && selectedId.action === "delete") {
      deleteLevel();
    } else if (selectedId.selectId && selectedId.action === "edit") {
      editLevel();
    }
  };

  const handleServerResponse = () => {
    setOpen(false);
    fetchLevels();
  };

  // onLoad Populate the setTowers state
  useEffect(() => {
    if (token) {
      fetchTowers();
      fetchLevels();
    }
  }, [token]);

  console.log("selected data: ", selectedId.data);
  console.log("Towers data: ", towersData);
  console.log("Levels Data: ", levelsData);

  console.log("i am server response; ", serverResponse);

  return (
    <>
      {/* level Modal */}
      <LevelModal
        open={open}
        onClose={handleClose}
        text="Are you sure you want to delete this record?"
        onConfirm={handleConfirm}
        action={selectedId.action}
        data={selectedId.action === "delete" ? {} : selectedId.data}
        token={token}
        handleServerResponse={handleServerResponse} // Pass the callback
      />
      {/* level Add Component */}
      <Box sx={{ width: "100%", mt: 5 }}>
        {/* // ============================|| Add Patient ||============================ // */}
        <Formik
          initialValues={{
            name: "",
            towerId: towersData.id,
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .matches(/^\d+$/, "Please enter only numbers")
              .required("Level is required"),
            towerId: Yup.string().required("Please Select a tower"),
          })}
          onSubmit={async (values, { setStatus, resetForm, setFieldValue }) => {
            console.log(values);

            try {
              const response = await AddLevelAPI(values, token);
              console.log("i am response in add level tab: ", response);

              if (response.status === 400 || response.status === 500) {
                setServerResponse({
                  authentication: false,
                  msg: response.statusText,
                  res: response.data,
                });
              } else if (response.status === 409) {
                setServerResponse({
                  authentication: false,
                  msg: response.data.error,
                  res: response.data,
                });
              } else {
                setServerResponse({
                  authentication: true,
                  msg: response.statusText,
                  res: response.data,
                });
                setStatus(true);
                resetForm();
                fetchLevels();
                setFieldValue({ towerId: "" });
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
                  {serverResponse.msg && (
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
                  )}
                </Grid>

                {/* Tower */}
                <Grid item md={12} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.towerId && errors.towerId)}
                  >
                    <InputLabel id="towerId-select-label">
                      Select Tower
                    </InputLabel>
                    <Select
                      labelId="towerId-select-label"
                      id="towerId"
                      value={values.towerId}
                      name="towerId"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="Tower"
                    >
                      <MenuItem>Select</MenuItem>
                      {towersData && towersData.length > 0 ? (
                        towersData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>No Towers Found</MenuItem>
                      )}
                      {/* Add more MenuItem components as needed */}
                    </Select>
                    {touched.towerId && errors.towerId && (
                      <FormHelperText error>{errors.towerId}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                {/* level */}
                <Grid item md={12} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="name-login">Level</InputLabel>
                    <OutlinedInput
                      id="name-login"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter level"
                      fullWidth
                      error={Boolean(touched.name && errors.name)}
                    />
                    {touched.name && errors.name && (
                      <FormHelperText error>{errors.name}</FormHelperText>
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
          All levels
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
                      Tower
                    </TableCell>
                    <TableCell align="right" sx={{ px: 3 }}>
                      Level
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
                  {levelsData && levelsData.length > 0 ? (
                    levelsData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow hover key={row.id} sx={{ cursor: "pointer" }}>
                          <TableCell component="th" scope="row" sx={{ px: 3 }}>
                            {row.id}
                          </TableCell>
                          <TableCell align="right" sx={{ px: 3 }}>
                            {row.tower.name}
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
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        Loading...
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={levelsData.length}
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

export default LevelTab;
