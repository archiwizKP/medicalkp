import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
  Alert,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  EditLevelAPI,
  GetLevelsByTowerId,
} from "../../services/operator-api/levelCrudApi";
import { useEffect, useState } from "react";
import { GetTowerAPI } from "../../services/operator-api/towersCrudAPI";
import { GetChambersByLevelId } from "../../services/operator-api/chambersCrudApi";
import { GetBedsByChamberId } from "../../services/operator-api/bedCrudAPi";
import { GetRolesDoctors } from "../../services/operator-api/doctorCrudApi";
import {
  EditPatientAPI,
  GetPatientsById,
} from "../../services/operator-api/patientsCrud";
import { se } from "date-fns/locale";

const AllPatientsModal = ({
  open,
  onClose,
  text,
  onConfirm,
  action,
  token,
  editId,
}) => {
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

  const [selectedPatientData, setSelectedPatientData] = useState([]);

  const [modalServerResponse, setModalServerResponse] = useState({
    authentication: false,
    res: "",
    msg: "",
  });

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
  const fetchLevelsByTowerId = async () => {
    try {
      const response = await GetLevelsByTowerId(token, towerId);
      console.log("ia m fetch lvels by towerid: ", response);
      if (response) {
        setLevelsData(response.data);
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

  // Get the selected Patients
  const fetchPatientsById = async () => {
    try {
      const response = await GetPatientsById(token, editId);
      console.log(
        "i am selected patient id in all patients modal:  ",
        response
      );
      if (response) {
        setSelectedPatientData(response);
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

  useEffect(() => {
    fetchPatientsById();
  }, [editId]);

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-scrollPaper::-webkit-scrollbar": {
          width: "8px",
        },
        "& .MuiDialog-scrollPaper::-webkit-scrollbar-track": {
          backgroundColor: "#dfdfdf",
        },
        "& .MuiDialog-scrollPaper::-webkit-scrollbar-thumb": {
          backgroundColor: "gray",
          borderRadius: "10px",
        },
        "& .MuiDialog-scrollPaper": {
          scrollbarColor: "gray #dfdfdf",
          scrollbarWidth: "thin",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "20px" }}>
        {action === "delete" ? "Confirmation" : "Update Patient Info"}
      </DialogTitle>
      <Divider />
      <Formik
        enableReinitialize
        initialValues={{
          towerId: selectedPatientData?.tower?.id || "",
          levelId: selectedPatientData?.level?.id || "",
          chamberId: selectedPatientData?.chamber?.id || "",
          bedId: selectedPatientData?.bed?.id || "",
          firstName: selectedPatientData?.firstName || "",
          lastName: selectedPatientData?.lastName || "",
          dob: selectedPatientData?.dob || "",
          mrNumber: selectedPatientData?.mrNumber || "",
          accountNumber: selectedPatientData?.accountNumber || "",
          followUp: "",
          roundingDoctor: "",
          receivingDoctor: "",
          lastScene: "",
          day: "",
          insurance: "",
          neurology: "",
          pmh: "",
          assessment: "",
          plan: "",
          objectives: "",
          initialNih: "",
          images: "",
          labStatus: "",
          history: "",
        }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          console.log("edit data :", values);

          try {
            const responseData = await EditPatientAPI(token, values, editId);
            console.log("response in edit all patients modal: ", response);

            const response =
              responseData.code === "ERR_BAD_REQUEST"
                ? responseData.response
                : response;

            if (response.status === 400 || response.status === 500) {
              setModalServerResponse({
                authentication: false,
                msg: response.data.message,
              });
            } else if (response.status === 409) {
              setModalServerResponse({
                authentication: false,
                msg: response.data.error,
              });
            } else {
              setModalServerResponse({
                authentication: true,
                msg: response.message,
                res: response,
              });
              setStatus(true);
              resetForm();
            }
          } catch (err) {
            setModalServerResponse({
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
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {action === "delete" ? (
              <>
                <DialogContent>
                  <Typography variant="body1" color="initial">
                    {text}
                  </Typography>
                </DialogContent>
              </>
            ) : (
              <Box sx={{ mb: 3 }}>
                <Grid container spacing={3}>
                  <Grid
                    container
                    spacing={3}
                    sx={{ width: "95%", margin: "auto" }}
                  >
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
                          <FormHelperText error>
                            {errors.towerId}
                          </FormHelperText>
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
                          ) : selectedPatientData?.level ? (
                            <MenuItem
                              selected
                              value={selectedPatientData.level?.id}
                              key={selectedPatientData.level?.id}
                            >
                              {selectedPatientData.level?.name}
                            </MenuItem>
                          ) : (
                            <MenuItem>No Levels Found</MenuItem>
                          )}
                        </Select>
                        {touched.levelId && errors.levelId && (
                          <FormHelperText error>
                            {errors.levelId}
                          </FormHelperText>
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
                          ) : selectedPatientData.chamber ? (
                            <MenuItem
                              value={selectedPatientData.chamber?.id}
                              key={selectedPatientData.chamber?.id}
                              selected
                            >
                              {selectedPatientData.chamber?.name}
                            </MenuItem>
                          ) : (
                            <MenuItem>No Chambers Found</MenuItem>
                          )}
                          {/* Add more MenuItem components as needed */}
                        </Select>
                        {touched.chamberId && errors.chamberId && (
                          <FormHelperText error>
                            {errors.chamberId}
                          </FormHelperText>
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
                        <InputLabel id="bedId-select-label">
                          Select Bed
                        </InputLabel>
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
                          <MenuItem value="">Select</MenuItem>
                          {bedsData && bedsData.length > 0 ? (
                            bedsData.map((item) => (
                              <MenuItem value={item.id} key={item.id}>
                                {item.bedNo}
                              </MenuItem>
                            ))
                          ) : selectedPatientData.bed ? (
                            <MenuItem
                              selected
                              value={selectedPatientData.bed?.id}
                              key={selectedPatientData.bed?.id}
                            >
                              {selectedPatientData.bed?.bedNo}
                            </MenuItem>
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
                          <FormHelperText
                            error
                            id="helper-text-firstName-signup"
                          >
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
                          <FormHelperText
                            error
                            id="helper-text-lastName-signup"
                          >
                            {errors.lastName}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Data of birth */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="dob-signup">
                          Date of Birth
                        </InputLabel>
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
                          <FormHelperText
                            error
                            id="helper-text-mrNumber-signup"
                          >
                            {errors.mrNumber}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Account Number */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        {/* <InputLabel htmlFor="accountNumber-signup">
                          Account Number
                        </InputLabel> */}
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
                    {/* Follow Up */}
                    <Grid item xs={6} md={6}>
                      <FormControl
                        fullWidth
                        error={Boolean(touched.followUp && errors.followUp)}
                      >
                        <InputLabel id="followUp-select-label" sx={{ mb: 1 }}>
                          Select F/U
                        </InputLabel>
                        <Select
                          labelId="followUp-select-label"
                          id="followUp"
                          value={values.followUp}
                          name="followUp"
                          onBlur={handleBlur}
                          onChange={(e) => {
                            handleChange(e);
                            setDoctorId(e.target.value);
                          }}
                          label="Follow Up"
                        >
                          <MenuItem value="Follow Up">Follow Up</MenuItem>
                          <MenuItem value="New">New</MenuItem>
                        </Select>
                        {touched.followUp && errors.followUp && (
                          <FormHelperText error>
                            {errors.followUp}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    {errors.submit && (
                      <Grid item xs={12} md={6}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                      </Grid>
                    )}

                    {/* Rounding Doctor */}
                    <Grid item md={6} xs={12}>
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
                    )}
                    {/* ARNP */}
                    <Grid item md={6} xs={12}>
                      <FormControl
                        fullWidth
                        error={Boolean(touched.arnp && errors.arnp)}
                      >
                        <InputLabel id="arnp-select-label">
                          Select ARNP
                        </InputLabel>
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
                    )}

                    {/* Recieving Doctor */}
                    <Grid item md={6} xs={12}>
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
                    )}

                    {/* Last Scene */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        {/* <InputLabel htmlFor="lastScene-signup">
                      Last Scene
                    </InputLabel> */}
                        <OutlinedInput
                          fullWidth
                          error={Boolean(touched.lastScene && errors.lastScene)}
                          id="lastScene-signup"
                          value={values.lastScene}
                          name="lastScene"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Last Scene"
                          inputProps={{}}
                        />
                        {touched.lastScene && errors.lastScene && (
                          <FormHelperText
                            error
                            id="helper-text-lastScene-signup"
                          >
                            {errors.lastScene}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Day */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="lastScene-signup">Day</InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(touched.day && errors.day)}
                          id="day-signup"
                          value={values.day}
                          name="day"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Day"
                          inputProps={{}}
                        />
                        {touched.day && errors.day && (
                          <FormHelperText error id="helper-text-day-signup">
                            {errors.day}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Insurance */}
                    <Grid item xs={12} md={6}>
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
                          <FormHelperText
                            error
                            id="helper-text-insurance-signup"
                          >
                            {errors.insurance}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Neurology */}
                    <Grid item xs={12} md={6}>
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
                          <FormHelperText
                            error
                            id="helper-text-neurology-signup"
                          >
                            {errors.neurology}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* PMH */}
                    <Grid item xs={12} md={6}>
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
                    </Grid>
                    {/* Objectives */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="objectives-signup">
                          Objectives
                        </InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(
                            touched.objectives && errors.objectives
                          )}
                          id="objectives-login"
                          type="objectives"
                          value={values.objectives}
                          name="objectives"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          inputProps={{}}
                        />
                        {touched.objectives && errors.objectives && (
                          <FormHelperText
                            error
                            id="helper-text-objectives-signup"
                          >
                            {errors.objectives}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Assessment */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="assessment-signup">
                          Assessment
                        </InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(
                            touched.assessment && errors.assessment
                          )}
                          id="assessment-login"
                          type="assessment"
                          value={values.assessment}
                          name="assessment"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          inputProps={{}}
                        />
                        {touched.assessment && errors.assessment && (
                          <FormHelperText
                            error
                            id="helper-text-assessment-signup"
                          >
                            {errors.assessment}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Plan */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="plan-signup">Plan</InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(touched.plan && errors.plan)}
                          id="plan-login"
                          type="plan"
                          value={values.plan}
                          name="plan"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          inputProps={{}}
                        />
                        {touched.plan && errors.plan && (
                          <FormHelperText error id="helper-text-plan-signup">
                            {errors.plan}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* initial NIH */}
                    <Grid item xs={12} md={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="initialNih-signup">
                          Initial NIH
                        </InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(
                            touched.initialNih && errors.initialNih
                          )}
                          id="initialNih-login"
                          type="initialNih"
                          value={values.initialNih}
                          name="initialNih"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          inputProps={{}}
                        />
                        {touched.initialNih && errors.initialNih && (
                          <FormHelperText
                            error
                            id="helper-text-initialNih-signup"
                          >
                            {errors.initialNih}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* images */}
                    <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                      <Stack spacing={1}>
                        <TextField
                          fullWidth
                          error={Boolean(touched.images && errors.images)}
                          id="images-login"
                          value={values.images}
                          name="images"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          label="images"
                          multiline
                          rows={4}
                          variant="outlined"
                          inputProps={{}}
                        />
                        {touched.images && errors.images && (
                          <FormHelperText error id="helper-text-images-signup">
                            {errors.images}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* Lab Status */}
                    <Grid item xs={12} md={6} sx={{ mt: 1 }}>
                      <Stack spacing={1}>
                        <TextField
                          fullWidth
                          error={Boolean(touched.labStatus && errors.labStatus)}
                          id="labStatus-login"
                          value={values.labStatus}
                          name="labStatus"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          label="labStatus"
                          multiline
                          rows={4}
                          variant="outlined"
                          inputProps={{}}
                        />
                        {touched.labStatus && errors.labStatus && (
                          <FormHelperText
                            error
                            id="helper-text-labStatus-signup"
                          >
                            {errors.labStatus}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    {/* History */}
                    <Grid item xs={12} md={12}>
                      <Stack spacing={1}>
                        <TextField
                          fullWidth
                          error={Boolean(touched.history && errors.history)}
                          id="history-login"
                          value={values.history}
                          name="history"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="demo@company.com"
                          label="history"
                          multiline
                          rows={4}
                          variant="outlined"
                          inputProps={{}}
                        />

                        {touched.history && errors.history && (
                          <FormHelperText error id="helper-text-history-signup">
                            {errors.history}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
            <Divider />
            <DialogActions sx={{ mt: 1 }}>
              <Button variant="outlined" color="success" onClick={onClose}>
                No
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={action === "delete" ? onConfirm : undefined}
              >
                {action === "delete" ? "Yes" : "Change"}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AllPatientsModal;
