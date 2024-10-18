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

// assets
import PropTypes from "prop-types";
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
  GetTowerAPI,
} from "../../services/operator-api/crudAPI";

// dialog
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyCustomModal = ({ open, onClose, text, onConfirm }) => (
  <Dialog fullWidth open={open} onClose={onClose}>
    <DialogTitle sx={{ fontWeight: "bold", fontSize: "20px" }}>
      Confirmation
    </DialogTitle>
    <Divider />
    <DialogContent>
      <Typography variant="body1" color="initial">
        {text}
      </Typography>
    </DialogContent>
    <Divider />
    <DialogActions sx={{ mt: 1 }}>
      <Button variant="outlined" color="success" onClick={onClose}>
        No
      </Button>
      <Button variant="contained" onClick={onConfirm}>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

const AddCategory = () => {
  const [token, setToken] = useState("");

  // data arrays
  const [towersData, setTowersData] = useState([]);

  // Selected id
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    // Get the token from local storage
    const storedData = JSON.parse(localStorage.getItem("auth"));
    if (storedData && storedData.token) {
      console.log("Stored data in add category: ", storedData.token);
      setToken(storedData.token);
    }

    console.log("ia m token: ", token);
  }, []);

  // server response
  const [serverResponse, setServerResponse] = useState({
    msg: "",
    res: "",
    authentication: false,
  });

  console.log("I am server response: ", serverResponse);

  // TABLE STATES
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  // get tower
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getTowersData = await GetTowerAPI(token);
        console.log("I am towers data", getTowersData);
        if (getTowersData) {
          setTowersData(getTowersData);
        }
      } catch (error) {
        console.log("I am towers error: ", error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  // Modal
  const [open, setOpen] = useState(false);

  const handleDeleteClick = async (row) => {
    setOpen(true);
    console.log("row id: ", row.id);
    setSelectedId(row.id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    // Perform delete action here
    setOpen(false);
    // Call delete api
    try {
      const response = await DeleteTowerAPI(selectedId, token);
      console.log("Delete api response", response);
      if (response.message) {
        // filter the items
        const filterTowersData = towersData.filter(
          (item) => item.id != selectedId
        );
        setTowersData(filterTowersData);
      }
    } catch (error) {
      console.log("delte api error", error);
    }
  };

  // Towers Table Data
  const data = [
    {
      id: 1,
      tower: "A",
    },
    {
      id: 2,
      tower: "B",
    },
    {
      id: 3,
      tower: "C",
    },
  ];

  // Floor Data
  const floorData = [
    {
      id: 1,
      floor: 1,
    },
    {
      id: 2,
      floor: 2,
    },
    {
      id: 3,
      floor: 3,
    },
  ];

  return (
    <>
      <MyCustomModal
        open={open}
        onClose={handleClose}
        text="Are you sure you want to delete this record?"
        onConfirm={handleConfirm}
      />
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
                          <FormHelperText error>
                            {errors.towerName}
                          </FormHelperText>
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
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 3 }}
              gutterBottom
            >
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
                      {towersData
                        ? towersData
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
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ ml: 2 }}
                                    onClick={() => handleDeleteClick(row)}
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
                  count={towersData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </Box>
        </CustomTabPanel>
        {/* Floor */}
        <CustomTabPanel value={value} index={1}>
          {/* Floor Add Component */}
          <Box sx={{ width: "100%", mt: 5 }}>
            {/* // ============================|| Floor ||============================ // */}
            <Formik
              initialValues={{
                tower: "",
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                floor: Yup.string().required("Floor is required"),
              })}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
              ) => {
                console.log(values);

                try {
                  const response = await AddTowerAPI(values);
                  if (response.status === 401 || response.status === 500) {
                    setServerResponse({
                      authentication: false,
                      msg: response.data.message,
                    });
                  } else {
                    // When Login Successfull
                    setServerResponse({
                      authentication: true,
                      msg: response.message,
                      res: response,
                    });
                    setStatus(true);
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
                    <Grid item md={3} xs={12}>
                      {/* Display the server response message */}
                      {serverResponse.msg && (
                        <Alert
                          variant="filled"
                          severity={
                            serverResponse.authentication ? "success" : "error"
                          }
                        >
                          {serverResponse.msg}
                        </Alert>
                      )}
                    </Grid>

                    {/* floor */}
                    <Grid item md={12} xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="floor-login">Floor</InputLabel>
                        <OutlinedInput
                          id="floor-login"
                          type="floor"
                          value={values.floor}
                          name="floor"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter floor"
                          fullWidth
                          error={Boolean(touched.floor && errors.floor)}
                        />
                        {touched.floor && errors.floor && (
                          <FormHelperText error>{errors.floor}</FormHelperText>
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
            <Typography
              variant="h5"
              component="div"
              sx={{ mb: 3 }}
              gutterBottom
            >
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
                        <TableCell sx={{ px: 3 }}>ID</TableCell>{" "}
                        {/* Add padding */}
                        <TableCell align="right" sx={{ px: 3 }}>
                          Floor
                        </TableCell>{" "}
                        {/* Add padding */}
                        <TableCell align="right" sx={{ px: 3 }}>
                          Action
                        </TableCell>{" "}
                        {/* Add padding */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {floorData
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            hover
                            key={row.id}
                            onClick={(event) => handleClick(event, row.id)}
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
                              {row.floor}
                            </TableCell>
                            <TableCell align="right" sx={{ px: 3 }}>
                              <Button
                                variant="contained"
                                color="success"
                                sx={{ ml: 2 }}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="contained"
                                color="error"
                                sx={{ ml: 2 }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </Box>
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
