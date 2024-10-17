import React from "react";
// material-ui
import { useEffect, useState } from "react";
// material-ui
import {
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
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

import {
  strengthColor,
  strengthIndicator,
} from "../../utils/password-strength";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import AnimateButton from "../../components/@extended/AnimateButton";

const AddPatient = () => {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("");
  }, []);

  return (
    <>
      <Box sx={{}}>
        {/* // ============================|| Add Patient ||============================ // */}
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            floor: "",
            chamber: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
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
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="firstname-signup">
                      First Name*
                    </InputLabel>
                    <OutlinedInput
                      id="firstname-login"
                      type="firstname"
                      value={values.firstname}
                      name="firstname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
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
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="lastname-signup">
                      Last Name*
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.lastname && errors.lastname)}
                      id="lastname-signup"
                      type="lastname"
                      value={values.lastname}
                      name="lastname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Doe"
                      inputProps={{}}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormHelperText error id="helper-text-lastname-signup">
                        {errors.lastname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="roundingDoctor-signup">
                      Rounding Doctor
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(
                        touched.roundingDoctor && errors.roundingDoctor
                      )}
                      id="roundingDoctor-signup"
                      value={values.roundingDoctor}
                      name="roundingDoctor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Demo Inc."
                      inputProps={{}}
                    />
                    {touched.roundingDoctor && errors.roundingDoctor && (
                      <FormHelperText
                        error
                        id="helper-text-roundingDoctor-signup"
                      >
                        {errors.roundingDoctor}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="arnp-signup">
                      Advance Register Nurse Practioner
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.arnp && errors.arnp)}
                      id="arnp-login"
                      type="arnp"
                      value={values.arnp}
                      name="arnp"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.arnp && errors.arnp && (
                      <FormHelperText error id="helper-text-arnp-signup">
                        {errors.arnp}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
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
                </Grid>
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
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="reviewDoctor-signup">
                      Recieve Doctor
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(
                        touched.reviewDoctor && errors.reviewDoctor
                      )}
                      id="reviewDoctor-login"
                      type="reviewDoctor"
                      value={values.reviewDoctor}
                      name="reviewDoctor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@company.com"
                      inputProps={{}}
                    />
                    {touched.reviewDoctor && errors.reviewDoctor && (
                      <FormHelperText
                        error
                        id="helper-text-reviewDoctor-signup"
                      >
                        {errors.reviewDoctor}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
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
                      <FormHelperText error id="helper-text-insurance-signup">
                        {errors.insurance}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
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
                      <FormHelperText error id="helper-text-neurology-signup">
                        {errors.neurology}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
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
