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
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { EditLevelAPI } from "../../services/operator-api/levelCrudApi";
import { useEffect, useState } from "react";
import { GetTowerAPI } from "../../services/operator-api/towersCrudAPI";

const LevelModal = ({
  open,
  onClose,
  text,
  onConfirm,
  action,
  data,
  token,
  handleServerResponse, // New prop
}) => {
  const [towersData, setTowersData] = useState([]);

  // Fetch the towers
  const fetchTowers = async () => {
    try {
      const response = await GetTowerAPI(token);
      console.log("i am fetch towers: ", response);
      if (response) {
        setTowersData(response);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTowers();
    }
  }, [token]);

  const [modalServerResponse, setModalServerResponse] = useState({
    authentication: false,
    res: "",
    msg: "",
  });

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "20px" }}>
        {action === "delete" ? "Confirmation" : "Update"}
      </DialogTitle>
      <Divider />
      <Formik
        initialValues={{
          name: data.name || "",
          towerId: data.towerId || "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .matches(/^\d+$/, "Please enter only numbers")
            .required("Level is required"),
          towerId: Yup.string().required("Please Select a tower"),
        })}
        onSubmit={async (values, { setStatus, resetForm }) => {
          console.log("edit data :", values);

          try {
            const responseData = await EditLevelAPI(token, values);
            console.log("response in edit cat modal: ", response);

            const response =
              responseData.code === "ERR_BAD_REQUEST"
                ? responseData.response
                : response;

            console.log("minified response: ", response);

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
              fetchData();
              onClose(); // Close the modal on success
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
                  <Grid item md={3.5} xs={12}>
                    {/* Display the server response message */}
                    {modalServerResponse.msg && (
                      <Alert
                        variant="filled"
                        severity={
                          modalServerResponse.authentication
                            ? "success"
                            : "error"
                        }
                        onClose={() => {
                          setModalServerResponse({
                            ...modalServerResponse,
                            msg: "",
                          });
                        }}
                      >
                        {modalServerResponse.msg}
                      </Alert>
                    )}
                  </Grid>
                  <Grid
                    container
                    spacing={3}
                    sx={{ width: "95%", margin: "auto" }}
                  >
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
                          onChange={handleChange}
                          label="Tower"
                        >
                          {towersData.map((item) => (
                            <MenuItem value={item.id} key={item.id}>
                              {item.name}
                            </MenuItem>
                          ))}
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
                    {/* Level */}
                    <Grid item md={12} xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="name-login">Level</InputLabel>
                        <OutlinedInput
                          id="name-login"
                          type="text"
                          value={values.name}
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter level"
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

export default LevelModal;
