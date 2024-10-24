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
  GetLevelsByTowerId,
} from "../../../services/operator-api/levelCrudApi";
import LevelModal from "../../../components/modal/levelModal";
import {
  AddChamberAPI,
  DeleteChamberAPI,
  GetChamberAPI,
} from "../../../services/operator-api/chambersCrudApi";

const ChamberTab = () => {
  const [token, setToken] = useState("");
  const [levelsData, setLevelsData] = useState([]);
  const [towersData, setTowersData] = useState([]);
  const [chambersData, setChambersData] = useState([]);
  const [selectedId, setSelectedId] = useState({
    selectId: "",
    action: "",
    data: {},
  });
  const [selectId, setSelectId] = useState(0);
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

  // fetch chambers
  const fetchChambers = async () => {
    try {
      const response = await GetChamberAPI(token);
      console.log("i am chambers response: ", response);
      if (response && response.data) {
        setChambersData(response.data ? response.data : []);
      }
    } catch (error) {
      console.log("Error: ", error);
      setChambersData([]); // Handle error cases by setting to empty array
    }
  };

  //  fetch levels
  const fetchLevelsByTowerId = async () => {
    try {
      const response = await GetLevelsByTowerId(token, selectId);
      console.log("ia m fetch lvels by towerid: ", response);
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
  const deleteChambers = async () => {
    try {
      const response = await DeleteChamberAPI(selectedId.selectId, token);
      console.log("Delete api response", response);
      if (response.message) {
        const filterlevelsData = levelsData.filter(
          (item) => item.id !== selectedId.selectId
        );
        setChambersData(filterlevelsData);
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
      deleteChambers();
    } else if (selectedId.selectId && selectedId.action === "edit") {
      editLevel();
    }
  };

  const handleServerResponse = () => {
    setOpen(false);
    // fetchLevelsByTowerId();
  };

  // onLoad Populate the setTowers state
  useEffect(() => {
    if (token) {
      fetchTowers();
      fetchChambers();
    }
  }, [token]);

  useEffect(() => {
    if (selectId) {
      console.log("i am select id", selectId);
      fetchLevelsByTowerId();
    }
  }, [selectId]);

  console.log("selected data: ", selectedId.data);
  console.log("Towers data: ", towersData);
  console.log("Levels Data: ", levelsData);
  console.log("Chambers Data: ", chambersData);

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
            towerId: towersData.length > 0 ? towersData[0].id : "", // Ensure towerId is initialized
            levelId: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Chamber is required"),
            towerId: Yup.string().required("Please Select a tower"),
            levelId: Yup.string().required("Please Select a level"),
          })}
          onSubmit={async (values, { resetForm, setFieldValue, setStatus }) => {
            console.log(values);
            setSelectId(values.towerId);
            try {
              const response = await AddChamberAPI(values, token);
              console.log("API response: ", response);

              // Check if response contains data and message
              if (
                response.data &&
                response.data.message &&
                response.data.success
              ) {
                setServerResponse({
                  authentication: true,
                  msg: response.data.message, // Use the message from the response
                  res: response.data,
                });

                // Perform success actions, like resetting form
                setStatus(true);
                resetForm();
                setFieldValue("towerId", ""); // Reset towerId
                setFieldValue("levelId", ""); // Reset levelId
                fetchChambers();
              } else {
                setServerResponse({
                  authentication: false,
                  msg: response.data.message || "Something went wrong.", // Use message from response or fallback
                });
              }
            } catch (err) {
              setServerResponse({
                authentication: false,
                msg: err.response
                  ? err.response.data.message
                  : "Something went wrong. Please try again.",
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
                      onChange={(e) => {
                        handleChange(e);
                        setSelectId(e.target.value);
                      }}
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
                {/* Levels */}
                <Grid item md={12} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.levelId && errors.levelId)}
                  >
                    <InputLabel id="levelId-select-label">
                      Select Levels
                    </InputLabel>
                    <Select
                      labelId="levelId-select-label"
                      id="levelId"
                      value={values.levelId}
                      name="levelId"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      label="Tower"
                    >
                      <MenuItem>Select</MenuItem>
                      {levelsData && levelsData.length > 0 ? (
                        levelsData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>No Levels Found</MenuItem>
                      )}
                      {/* Add more MenuItem components as needed */}
                    </Select>
                    {touched.levelId && errors.levelId && (
                      <FormHelperText error>{errors.levelId}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                {/* Chamber */}
                <Grid item md={12} xs={12}>
                  <Stack spacing={1}>
                    {/* <InputLabel htmlFor="name-login">Chamber</InputLabel> */}
                    <OutlinedInput
                      id="name-login"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter chamber"
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
          All Chambers
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
                      Chamber
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
                  {chambersData && chambersData.length > 0 ? (
                    chambersData
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
                            {row.level.name}
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
                      <TableCell>Loading...</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={chambersData.length}
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

export default ChamberTab;
