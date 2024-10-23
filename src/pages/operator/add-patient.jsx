import React from "react";
// material-ui
import { useEffect, useState } from "react";
// material-ui
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import { Grid, TextField } from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

import AnimateButton from "../../components/@extended/AnimateButton";
import { GetTowerAPI } from "../../services/operator-api/towersCrudAPI";
import { GetBedsByChamberId } from "../../services/operator-api/bedCrudAPi";
import { GetLevelsByTowerId } from "../../services/operator-api/levelCrudApi";
import { GetChambersByLevelId } from "../../services/operator-api/chambersCrudApi";
import { GetRolesDoctors } from "../../services/operator-api/doctorCrudApi";
import AuthWrapper from "../authentication/AuthWrapper";
import OperatorMenu from "../../menu-items/operator";
import BreadCrumbs from "../../components/breadcrumbs";
import { AddPatientAPI } from "../../services/operator-api/patientsCrud";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [levelsData, setLevelsData] = useState([]);
  const [towersData, setTowersData] = useState([]);
  const [chambersData, setChambersData] = useState([]);
  const [bedsData, setBedsData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  // ids
  const [towerId, setTowerId] = useState(0);
  const [levelId, setLevelId] = useState(0);
  const [chamberId, setChamberId] = useState(0);
  const [doctorId, setDoctorId] = useState(0);
  const [serverResponse, setServerResponse] = useState({
    msg: "",
    res: "",
    authentication: false,
  });

  // get the token
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
        setTowersData(response);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  //  fetch levels
  const fetchLevelsByTowerId = async () => {
    try {
      const response = await GetLevelsByTowerId(token, towerId);
      console.log("ia m fetch lvels by towerid: ", response);
      if (response) {
        setLevelsData(response);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // fetch chambers
  const fetchChambersByLevelId = async () => {
    try {
      const response = await GetChambersByLevelId(token, levelId);
      console.log("ia m fetch chambers by levelId: ", response);
      if (response && response.data) {
        setChambersData(response.data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // fetch beds
  const fetchBedsByChamberId = async () => {
    try {
      const response = await GetBedsByChamberId(token, chamberId);
      console.log("ia m fetch beds by chamberId: ", response);
      if (response && response.data) {
        setBedsData(response.data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // fetch doctors
  const fetchDoctors = async () => {
    try {
      const response = await GetRolesDoctors(token, chamberId);
      console.log("i am roles doctors data: ", response);
      if (response && response.data) {
        setDoctorsData(response.data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // onLoad Populate the setTowers state
  useEffect(() => {
    if (token) {
      fetchTowers();
      fetchDoctors();
    }
  }, [token]);

  useEffect(() => {
    if (towerId) {
      console.log("i am select id", towerId);
      fetchLevelsByTowerId();
    }
  }, [towerId]);

  useEffect(() => {
    if (levelId) {
      fetchChambersByLevelId();
      console.log("i am chamber id", levelId);
    }
  }, [levelId]);

  useEffect(() => {
    if (chamberId) {
      fetchBedsByChamberId();
      console.log("i am chamber id", chamberId);
    }
  }, [chamberId]);

  return (
    <>
      <BreadCrumbs title={true} page={"Add Patient"} />
      <Box sx={{ mt: 5 }}>
        {/* // ============================|| Add Patient ||============================ // */}
        <Formik
          initialValues={{
            towerId: towersData.length > 0 ? towersData[0] : "",
            levelId: levelsData.length > 0 ? levelsData[0] : "",
            chamberId: chambersData.length > 0 ? chambersData[0] : "",
            bedId: bedsData.length > 0 ? bedsData[0] : "",
            firstName: "",
            lastName: "",
            dob: "",
            mrNumber: "",
            accountNumber: "",
          }}
          validationSchema={Yup.object().shape({
            towerId: Yup.string().required("Please select a tower"),
            levelId: Yup.string().required("Please select a level"),
            chamberId: Yup.string().required("Please select a chamber"),
            bedId: Yup.string().required("Please select a Bed"),
            firstName: Yup.string().max(255).required("First Name is required"),
            lastName: Yup.string().max(255).required("Last Name is required"),
            dob: Yup.string().max(255).required("Date of Birth is required"),
            mrNumber: Yup.string().max(255).required("Mr number is required"),
            accountNumber: Yup.string()
              .max(255)
              .required("Account number is required"),
          })}
          onSubmit={async (
            values,
            { setErrors, setStatus, setSubmitting, resetForm, setFieldValue }
          ) => {
            try {
              const response = await AddPatientAPI(values, token);
              console.log("API response: ", response);

              console.log("i am success", response.data.success);

              // Check if response contains data and message
              if (response && response.data.success) {
                setServerResponse({
                  authentication: true,
                  msg: response.data.message, // Use the message from the response
                  res: response.data.data,
                });
                resetForm();
                setFieldValue("towerId", ""); // Reset towerId
                setFieldValue("levelId", ""); // Reset levelId
                setFieldValue("chamberId", ""); // reset chamber id
                setFieldValue("bedId", ""); // reset bed id
                // navigate to additional fields
                if (delayState) {
                  navigate("/operator/add-patient-additionalinfo");
                }
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
            } finally {
              setSubmitting(false);
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
              <Grid item md={3.5} xs={12} sx={{ mb: 5 }}>
                {/* Display the server response message */}
                {serverResponse.msg && (
                  <Alert
                    sx={{ width: "500px" }}
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
              <Grid container spacing={3}>
                {/* Tower */}
                <Grid item md={6} xs={12}>
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
                        setTowerId(e.target.value);
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
                        <MenuItem>No Tower Found</MenuItem>
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
                <Grid item md={6} xs={12}>
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
                        setLevelId(e.target.value);
                      }}
                      label="Level"
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
                {/* Chambers */}
                <Grid item md={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.chamberId && errors.chamberId)}
                  >
                    <InputLabel id="chamberId-select-label">
                      Select Chamber
                    </InputLabel>
                    <Select
                      labelId="chamberId-select-label"
                      id="chamberId"
                      value={values.chamberId}
                      name="chamberId"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        setChamberId(e.target.value);
                      }}
                      label="chamberId"
                    >
                      <MenuItem>Select</MenuItem>
                      {chambersData && chambersData.length > 0 ? (
                        chambersData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>No Chambers Found</MenuItem>
                      )}
                      {/* Add more MenuItem components as needed */}
                    </Select>
                    {touched.chamberId && errors.chamberId && (
                      <FormHelperText error>{errors.chamberId}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                {/* Beds */}
                <Grid item md={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.bedId && errors.bedId)}
                  >
                    <InputLabel id="bedId-select-label">Select Bed</InputLabel>
                    <Select
                      labelId="bedId-select-label"
                      id="bedId"
                      value={values.bedId}
                      name="bedId"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      label="Beds"
                    >
                      <MenuItem>Select</MenuItem>
                      {bedsData && bedsData.length > 0 ? (
                        bedsData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.bedNo}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem>No Beds Found</MenuItem>
                      )}
                      {/* Add more MenuItem components as needed */}
                    </Select>
                    {touched.bedId && errors.bedId && (
                      <FormHelperText error>{errors.bedId}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}

                {/* First Name */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    {/* <InputLabel htmlFor="firstName-signup">
                      First Name*
                    </InputLabel> */}
                    <OutlinedInput
                      id="firstName-login"
                      type="firstName"
                      value={values.firstName}
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      fullWidth
                      error={Boolean(touched.firstName && errors.firstName)}
                    />
                    {touched.firstName && errors.firstName && (
                      <FormHelperText error id="helper-text-firstName-signup">
                        {errors.firstName}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    {/* <InputLabel htmlFor="lastName-signup">
                      Last Name*
                    </InputLabel> */}
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.lastName && errors.lastName)}
                      id="lastName-signup"
                      type="lastName"
                      value={values.lastName}
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      inputProps={{}}
                    />
                    {touched.lastName && errors.lastName && (
                      <FormHelperText error id="helper-text-lastName-signup">
                        {errors.lastName}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Data of birth */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="dob-signup">Date of Birth</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.dob && errors.dob)}
                      id="dob-login"
                      type="date"
                      value={values.dob}
                      name="dob"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.dob && errors.dob && (
                      <FormHelperText error id="helper-text-dob-signup">
                        {errors.dob}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Mr Number */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="accountNumber-signup">
                      Mr Number
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.mrNumber && errors.mrNumber)}
                      id="mrNumber-signup"
                      value={values.mrNumber}
                      name="mrNumber"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Mr Number"
                      inputProps={{}}
                    />
                    {touched.mrNumber && errors.mrNumber && (
                      <FormHelperText error id="helper-text-mrNumber-signup">
                        {errors.mrNumber}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Account Number */}
                <Grid item xs={12} md={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="accountNumber-signup">
                      Account Number
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(
                        touched.accountNumber && errors.accountNumber
                      )}
                      id="accountNumber-login"
                      type="accountNumber"
                      value={values.accountNumber}
                      name="accountNumber"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.accountNumber && errors.accountNumber && (
                      <FormHelperText
                        error
                        id="helper-text-accountNumber-signup"
                      >
                        {errors.accountNumber}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Button */}
                <Grid item xs={1}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Create
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default AddPatient;
