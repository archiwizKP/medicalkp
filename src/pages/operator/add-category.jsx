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

// assets

const AddCategory = () => {
  const [level, setLevel] = useState();
  const [showlevel, setShowlevel] = useState(false);
  const handleClickShowlevel = () => {
    setShowlevel(!showlevel);
  };

  const handleMouseDownlevel = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ width: "100%", mt: 5 }}>
        {/* // ============================|| Add Patient ||============================ // */}
        <Formik
          initialValues={{
            tower: "",
            level: "",
            floor: "",
            chamber: "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            tower: Yup.string().required("Tower is required"),
            level: Yup.string().required("Level is required"),
            floor: Yup.string().required("Floor is required"),
            chamber: Yup.string().required("Chamber is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              const response = await SignInAPI(values);
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
                <Grid item md={6} xs={12}>
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
                <Grid item md={6} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="level-login">Level</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.level && errors.level)}
                      id="-level-login"
                      type={showlevel ? "text" : "level"}
                      value={values.level}
                      name="level"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle level visibility"
                            edge="end"
                            size="large"
                          ></IconButton>
                        </InputAdornment>
                      }
                      placeholder="Enter level"
                    />
                    {touched.level && errors.level && (
                      <FormHelperText error>{errors.level}</FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item md={6} xs={12}>
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
                <Grid item md={6} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="chamber-login">Chamber</InputLabel>
                    <OutlinedInput
                      id="chamber-login"
                      type="chamber"
                      value={values.chamber}
                      name="chamber"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter chamber"
                      fullWidth
                      error={Boolean(touched.chamber && errors.chamber)}
                    />
                    {touched.chamber && errors.chamber && (
                      <FormHelperText error>{errors.chamber}</FormHelperText>
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
    </>
  );
};

export default AddCategory;
