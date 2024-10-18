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

{
  /* Tabs */
}
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
import { AddTowerAPI } from "../../services/operator-api/addRecordAPI";
import CustomAlert from "../../components/alert";

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

const AddCategory = () => {
  // server response
  const [serverResponse, setServerResponse] = useState({
    msg: "",
    res: "",
    authentication: false,
  });

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
            <Tab label="Bed" {...a11yProps(1)} />
            <Tab label="Floor" {...a11yProps(2)} />
            <Tab label="Chamber" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* Tower */}
        <CustomTabPanel value={value} index={0}>
          {/* Tower Add Component */}
          <Box sx={{ width: "100%", mt: 5 }}>
            {/* // ============================|| Add Patient ||============================ // */}
            <Formik
              initialValues={{
                tower: "",
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                tower: Yup.string().required("Tower is required"),
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

                    {/* Tower */}
                    <Grid item md={12} xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="tower-login">Tower</InputLabel>
                        <OutlinedInput
                          id="tower-login"
                          type="tower"
                          value={values.tower}
                          name="tower"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter Tower"
                          fullWidth
                          error={Boolean(touched.tower && errors.tower)}
                        />
                        {touched.tower && errors.tower && (
                          <FormHelperText error>{errors.tower}</FormHelperText>
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
                        <TableCell sx={{ px: 3 }}>ID</TableCell>{" "}
                        {/* Add padding */}
                        <TableCell align="right" sx={{ px: 3 }}>
                          Tower
                        </TableCell>{" "}
                        {/* Add padding */}
                        <TableCell align="right" sx={{ px: 3 }}>
                          Action
                        </TableCell>{" "}
                        {/* Add padding */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data
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
                              {row.tower}
                            </TableCell>
                            <TableCell align="right" sx={{ px: 3 }}>
                              <Button variant="contained" color="primary">
                                Action
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
        {/* Floor */}
        <CustomTabPanel value={value} index={2}>
          Floor
        </CustomTabPanel>
        {/* Chamber */}
        <CustomTabPanel value={value} index={3}>
          Chamber
        </CustomTabPanel>
        {/* Bed */}
        <CustomTabPanel value={value} index={1}>
          Bed
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default AddCategory;
