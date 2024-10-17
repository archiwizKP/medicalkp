// material-ui
import { Grid, Stack, Typography, Box } from "@mui/material";

// project import
import AuthLogin from "./auth-forms/AuthLogin";
import AuthWrapper from "./AuthWrapper";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  FormHelperText,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project import

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import CustomAlert from "../../components/alert";
import AuthBackground from "../../assets/images/auth/AuthBackground";
import Logo from "../../components/Logo/Logo";
import AuthCard from "./AuthCard";
import AuthFooter from "../../components/cards/AuthFooter";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../store/reducers/actions";
import { SignInAPI } from "../../services/operator-api/authenticationAPI";

// ================================|| LOGIN ||================================ //

const Login = () => {
  // server response
  const [serverResponse, setServerResponse] = useState({
    msg: "",
    res: "",
    authentication: false,
  });

  // navigate
  const navigate = useNavigate();

  // redux state
  const dispatch = useDispatch();
  const userState = useSelector((state) => state);

  console.log("i am userState: ", userState);

  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(serverResponse);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <AuthBackground />
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              minHeight: {
                xs: "calc(100vh - 134px)",
                md: "calc(100vh - 112px)",
              },
            }}
          >
            <Grid item>
              {/* Display the server response message */}
              {serverResponse.msg && (
                <CustomAlert
                  text={serverResponse.msg}
                  type={serverResponse.authentication ? "success" : "error"}
                />
              )}

              <AuthCard>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="baseline"
                      sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                    >
                      <Typography variant="h3">Login</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Formik
                      initialValues={{
                        email: "operator@abc.com",
                        password: "operator123",
                        submit: null,
                      }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string()
                          .email("Must be a valid email")
                          .max(255)
                          .required("Email is required"),
                        password: Yup.string()
                          .max(255)
                          .required("Password is required"),
                      })}
                      onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting }
                      ) => {
                        try {
                          const response = await SignInAPI(values);
                          if (
                            response.status === 401 ||
                            response.status === 500
                          ) {
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
                            // Add the data in the redux state
                            dispatch(
                              LoginAction({
                                token: response.token,
                                data: response.user,
                              })
                            );
                            // Add the data in the local storage
                            localStorage.setItem(
                              "auth",
                              JSON.stringify({
                                token: response.token,
                                data: response.user,
                              })
                            );
                            // send the users to its appropriate routes
                            if (response.user.role === "operator") {
                              navigate("/operator");
                            } else if (response.user.role === "doctor") {
                              navigate("/dashboard");
                            }
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
                            <Grid item xs={12}>
                              <Stack spacing={1}>
                                <InputLabel htmlFor="email-login">
                                  Email Address
                                </InputLabel>
                                <OutlinedInput
                                  id="email-login"
                                  type="email"
                                  value={values.email}
                                  name="email"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  placeholder="Enter email address"
                                  fullWidth
                                  error={Boolean(touched.email && errors.email)}
                                />
                                {touched.email && errors.email && (
                                  <FormHelperText error>
                                    {errors.email}
                                  </FormHelperText>
                                )}
                              </Stack>
                            </Grid>
                            <Grid item xs={12}>
                              <Stack spacing={1}>
                                <InputLabel htmlFor="password-login">
                                  Password
                                </InputLabel>
                                <OutlinedInput
                                  fullWidth
                                  error={Boolean(
                                    touched.password && errors.password
                                  )}
                                  id="-password-login"
                                  type={showPassword ? "text" : "password"}
                                  value={values.password}
                                  name="password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                      >
                                        {showPassword ? (
                                          <EyeOutlined />
                                        ) : (
                                          <EyeInvisibleOutlined />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                  placeholder="Enter password"
                                />
                                {touched.password && errors.password && (
                                  <FormHelperText error>
                                    {errors.password}
                                  </FormHelperText>
                                )}
                              </Stack>
                            </Grid>
                            {errors.submit && (
                              <Grid item xs={12}>
                                <FormHelperText error>
                                  {errors.submit}
                                </FormHelperText>
                              </Grid>
                            )}
                            <Grid item xs={12}>
                              <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                              >
                                Login
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      )}
                    </Formik>
                  </Grid>
                </Grid>
              </AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
