import React from "react";
// material-ui
import { useEffect, useState } from "react";
// material-ui
import { Box, Button, TableHead, Typography } from "@mui/material";

// tables
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  DeleteTowerAPI,
  EditTowerAPI,
  GetTowerAPI,
} from "../../services/operator-api/towersCrudAPI";
import TowerModal from "../../components/modal/towerModal";
import BreadCrumbs from "../../components/breadcrumbs";
import {
  DeletePatientAPI,
  GetPatientAPI,
} from "../../services/operator-api/patientsCrud";

// dialog

const AllPatients = () => {
  const [token, setToken] = useState("");
  const [towersData, setPatientsData] = useState([]);
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
      const getPatientsData = await GetPatientAPI(token);
      console.log("I am patients data", getPatientsData);
      if (getPatientsData) {
        setPatientsData(getPatientsData);
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
  const deletePatient = async () => {
    try {
      const response = await DeletePatientAPI(selectedId.selectId, token);
      console.log("Delete api response", response);
      if (response.message) {
        const filterTowersData = towersData.filter(
          (item) => item.id !== selectedId.selectId
        );
        setPatientsData(filterTowersData);
        setServerResponse({
          msg: "",
          res: "",
          authentication: false,
        });
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
        setPatientsData(updatedTowersData);
      }
    } catch (error) {
      console.log("edit api error", error);
    }
  };

  // Handle Confirm
  const handleConfirm = async () => {
    setOpen(false);
    if (selectedId.selectId && selectedId.action === "delete") {
      deletePatient();
    } else if (selectedId.selectId && selectedId.action === "edit") {
      editTower();
    }
  };

  const handleServerResponse = () => {
    setOpen(false);
    fetchData();
  };

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
      <BreadCrumbs title={false} page={"All Patients"} />
      {/* Table */}
      <Box sx={{ width: "100%", mt: 5 }}>
        {serverResponse.msg && (
          <Alert
            sx={{ width: "500px" }}
            variant="filled"
            severity={serverResponse.authentication ? "success" : "error"}
            onClose={() => {
              setServerResponse({ ...serverResponse, msg: "" });
            }}
          >
            {serverResponse.msg}
          </Alert>
        )}
        <Typography variant="h5" component="div" sx={{ mb: 3 }} gutterBottom>
          All Patients
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
                      First Name
                    </TableCell>
                    <TableCell align="right" sx={{ px: 3 }}>
                      Last Name
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
                            {row.firstName}
                          </TableCell>
                          <TableCell align="right" sx={{ px: 3 }}>
                            {row.lastName}
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
                    <>
                      <TableRow>
                        <TableCell>Loading...</TableCell>
                      </TableRow>
                    </>
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

export default AllPatients;
