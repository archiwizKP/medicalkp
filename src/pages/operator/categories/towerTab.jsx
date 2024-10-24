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
  MenuItem,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// modal

// assets
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// tables
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  AddTowerAPI,
  DeleteTowerAPI,
  EditTowerAPI,
  GetTowerAPI,
} from "../../../services/operator-api/towersCrudAPI";

// dialog
import TowerModal from "../../../components/modal/towerModal";
import Loader from "../../../components/Loader";

const TowerTab = () => {
  const [token, setToken] = useState("");
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
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("auth"));
    if (storedData && storedData.token) {
      console.log("Stored data in add category: ", storedData.token);
      setToken(storedData.token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const fetchData = async () => {
    try {
      const getTowersData = await GetTowerAPI(token);
      console.log("I am towers data", getTowersData);
      if (getTowersData) {
        setTowersData(getTowersData.data);
      }
    } catch (error) {
      console.log("I am towers error: ", error);
    }
  };

  // Next Page Code

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event, id) => {
    console.log("Row clicked, ID:", id);
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

  // Delete Tower
  const deleteTower = async () => {
    try {
      const response = await DeleteTowerAPI(selectedId.selectId, token);
      console.log("Delete api response", response);
      if (response.message) {
        const filterTowersData = towersData.filter(
          (item) => item.id !== selectedId.selectId
        );
        setTowersData(filterTowersData);
      }
    } catch (error) {
      console.log("delete api error", error);
    }
  };

  // Edit Tower
  const editTower = async () => {
    try {
      const response = await EditTowerAPI(selectedId.selectId, token);
      console.log("Edit api response", response);
      if (response.message) {
        const updatedTowersData = towersData.map((item) =>
          item.id === selectedId.selectId ? { ...item, ...response.data } : item
        );
        setTowersData(updatedTowersData);
      }
    } catch (error) {
      console.log("edit api error", error);
    }
  };

  // Handle Confirm
  const handleConfirm = async () => {
    setOpen(false);
    if (selectedId.selectId && selectedId.action === "delete") {
      deleteTower();
    } else if (selectedId.selectId && selectedId.action === "edit") {
      editTower();
    }
  };

  const handleServerResponse = () => {
    setOpen(false);
    fetchData();
  };

  const data = [
    {
      id: 1,
      floor: 2,
    },
  ];

  const floorData = [
    {
      id: 1,
      floor: 2,
    },
  ];

  console.log("selected data: ", selectedId.data);
  return (
    <>
      {/* Tower Modal */}
      <TowerModal
        open={open}
        onClose={handleClose}
        text="Are you sure you want to delete this record?"
        onConfirm={handleConfirm}
        action={selectedId.action}
        data={selectedId.action === "delete" ? {} : selectedId.data}
        token={token}
        handleServerResponse={handleServerResponse} // Pass the callback
      />
      {/* Tower Add Component */}
      <Box sx={{ width: "100%", mt: 5 }}>
        {/* // ============================|| Add Patient ||============================ // */}
        <Formik
          initialValues={{
            towerName: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            towerName: Yup.string().required("Tower is required"),
          })}
          onSubmit={async (values, { setStatus, resetForm }) => {
            console.log(values);

            try {
              const response = await AddTowerAPI(values, token);
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
                <Grid item md={3.5} xs={12}>
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
                  <Stack spacing={1}>
                    <InputLabel htmlFor="towerName-login">Tower</InputLabel>
                    <OutlinedInput
                      id="towerName-login"
                      type="text"
                      value={values.towerName}
                      name="towerName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Tower"
                      fullWidth
                      error={Boolean(touched.towerName && errors.towerName)}
                    />
                    {touched.towerName && errors.towerName && (
                      <FormHelperText error>{errors.towerName}</FormHelperText>
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
                    Add
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
          All Towers
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
                      Created At
                    </TableCell>
                    <TableCell align="right" sx={{ px: 3 }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {towersData && towersData.length > 0 ? (
                    towersData
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
                    <MenuItem>Loading...</MenuItem>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={towersData.length}
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

export default TowerTab;
