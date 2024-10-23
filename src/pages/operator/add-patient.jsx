import React from "react";
// material-ui
import { useEffect, useState } from "react";
// material-ui
import {
  Box,
  Breadcrumbs,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";

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

const AddPatient = () => {
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

  console.log("i am doctors data arnp: ", doctorsData.ARNP);

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
            firstname: "",
            lastname: "",
            floor: "",
            chamber: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            towerId: Yup.string().required("Please select a tower"),
            levelId: Yup.string().required("Please select a level"),
            chamberId: Yup.string().required("Please select a chamber"),
            firstname: Yup.string().max(255).required("First Name is required"),
            lastname: Yup.string().max(255).required("Last Name is required"),
            roundingDoctor: Yup.string()
              .max(255)
              .required("Rounding Doctor is required"),
            lastScene: Yup.string().max(255).required("Last Scene is required"),
            dob: Yup.string().max(255).required("Date of Birth is required"),
            mrNumber: Yup.string().max(255).required("Mr number is required"),
            accountNumber: Yup.string()
              .max(255)
              .required("Account number is required"),
            reviewDoctor: Yup.string()
              .max(255)
              .required("Review doctor is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              setStatus({ success: false });
              setSubmitting(false);
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
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
                      {towersData.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
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
                      {levelsData &&
                        levelsData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
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
                      label="Chamber"
                    >
                      <MenuItem>Select</MenuItem>
                      {chambersData &&
                        chambersData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
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
                      {bedsData &&
                        bedsData.map((item) => (
                          <MenuItem value={item.id} key={item.id}>
                            {item.bedNo}
                          </MenuItem>
                        ))}
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
                {/* Rounding Doctor */}
                {/* <Grid item md={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.roundingDoctor && errors.roundingDoctor
                    )}
                  >
                    <InputLabel id="roundingDoctor-select-label">
                      Select Rounding Doctor
                    </InputLabel>
                    <Select
                      labelId="roundingDoctor-select-label"
                      id="roundingDoctor"
                      value={values.roundingDoctor}
                      name="roundingDoctor"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        setDoctorId(e.target.value);
                      }}
                      label="Rounding Doctor"
                    >
                      <MenuItem>Select</MenuItem>
                      {doctorsData["Rounding Doctor"] ? (
                        doctorsData["Rounding Doctor"].length > 0 ? (
                          doctorsData["Rounding Doctor"].map((item) => (
                            <MenuItem value={item.id} key={item.id}>
                              {item.name}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>
                            No Rounding Doctors available
                          </MenuItem>
                        )
                      ) : (
                        <MenuItem disabled>Loading...</MenuItem>
                      )}
                    </Select>
                    {touched.roundingDoctor && errors.roundingDoctor && (
                      <FormHelperText error>
                        {errors.roundingDoctor}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )} */}
                {/* ARNP */}
                {/* <Grid item md={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.arnp && errors.arnp)}
                  >
                    <InputLabel id="arnp-select-label">Select ARNP</InputLabel>
                    <Select
                      labelId="arnp-select-label"
                      id="arnp"
                      value={values.arnp}
                      name="arnp"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      label="ARNP"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {doctorsData["ARNP"] ? (
                        doctorsData["ARNP"].length > 0 ? (
                          doctorsData["ARNP"].map((item) => (
                            <MenuItem value={item.id} key={item.id}>
                              {item.name}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>No ARNPs available</MenuItem>
                        )
                      ) : (
                        <MenuItem disabled>Loading...</MenuItem>
                      )}
                    </Select>

                    {touched.arnp && errors.arnp && (
                      <FormHelperText error>{errors.arnp}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )} */}

                {/* Recieving Doctor */}
                {/* <Grid item md={6} xs={12}>
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.receivingDoctor && errors.receivingDoctor
                    )}
                  >
                    <InputLabel id="receivingDoctor-select-label">
                      Select Receiving Doctor
                    </InputLabel>
                    <Select
                      labelId="receivingDoctor-select-label"
                      id="receivingDoctor"
                      value={values.receivingDoctor}
                      name="receivingDoctor"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      label="receivingDoctor"
                    >
                      <MenuItem>Select</MenuItem>
                      {doctorsData["Receiving Doctor"] ? (
                        doctorsData["Receiving Doctor"].length > 0 ? (
                          doctorsData["Receiving Doctor"].map((item) => (
                            <MenuItem value={item.id} key={item.id}>
                              {item.name}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem disabled>
                            No Receiving Doctors available
                          </MenuItem>
                        )
                      ) : (
                        <MenuItem disabled>Loading...</MenuItem>
                      )}
                    </Select>
                    {touched.receivingDoctor && errors.receivingDoctor && (
                      <FormHelperText error>
                        {errors.receivingDoctor}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )} */}
                {/* First Name */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    {/* <InputLabel htmlFor="firstname-signup">
                      First Name*
                    </InputLabel> */}
                    <OutlinedInput
                      id="firstname-login"
                      type="firstname"
                      value={values.firstname}
                      name="firstname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      fullWidth
                      error={Boolean(touched.firstname && errors.firstname)}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormHelperText error id="helper-text-firstname-signup">
                        {errors.firstname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    {/* <InputLabel htmlFor="lastname-signup">
                      Last Name*
                    </InputLabel> */}
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.lastname && errors.lastname)}
                      id="lastname-signup"
                      type="lastname"
                      value={values.lastname}
                      name="lastname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      inputProps={{}}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormHelperText error id="helper-text-lastname-signup">
                        {errors.lastname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>

                {/* Last Scene */}
                {/* <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="lastScene-signup">
                      Last Scene
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.lastScene && errors.lastScene)}
                      id="lastScene-signup"
                      value={values.lastScene}
                      name="lastScene"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Demo Inc."
                      inputProps={{}}
                    />
                    {touched.lastScene && errors.lastScene && (
                      <FormHelperText error id="helper-text-lastScene-signup">
                        {errors.lastScene}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid> */}
                {/* Data of birth */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="dob-signup">Date of Birth</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.dob && errors.dob)}
                      id="dob-login"
                      type="dob"
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
                      placeholder="Demo Inc."
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
                {/* Insurance */}
                {/* <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="insurance-signup">
                      Insurance
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.insurance && errors.insurance)}
                      id="insurance-login"
                      type="insurance"
                      value={values.insurance}
                      name="insurance"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.insurance && errors.insurance && (
                      <FormHelperText error id="helper-text-insurance-signup">
                        {errors.insurance}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid> */}
                {/* Neurology */}
                {/* <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="neurology-signup">
                      Neurology
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.neurology && errors.neurology)}
                      id="neurology-login"
                      type="neurology"
                      value={values.neurology}
                      name="neurology"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.neurology && errors.neurology && (
                      <FormHelperText error id="helper-text-neurology-signup">
                        {errors.neurology}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid> */}
                {/* PMH */}
                {/* <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="pmh-signup">PMH</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.pmh && errors.pmh)}
                      id="pmh-login"
                      type="pmh"
                      value={values.pmh}
                      name="pmh"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.pmh && errors.pmh && (
                      <FormHelperText error id="helper-text-pmh-signup">
                        {errors.pmh}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid> */}
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
