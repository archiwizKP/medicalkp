import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { EditTowerAPI } from "../../services/operator-api/towersCrudAPI";
const TowerModal = ({
  open,
  onClose,
  text,
  onConfirm,
  action,
  data,
  token,
  handleServerResponse, // New prop
}) => (
  <Dialog fullWidth open={open} onClose={onClose}>
    <DialogTitle sx={{ fontWeight: "bold", fontSize: "20px" }}>
      Confirmation
    </DialogTitle>
    <Divider />
    <Formik
      initialValues={{
        towerName: data.name,
        id: data.id,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        towerName: Yup.string().required("Tower is required"),
      })}
      onSubmit={async (values, { setStatus, resetForm }) => {
        console.log("edit data :", values);

        try {
          const response = await EditTowerAPI(token, values);

          console.log("response in add cat page", response);

          if (response.status === 400 || response.status === 500) {
            handleServerResponse({
              authentication: false,
              msg: response.data.message,
            });
          } else {
            handleServerResponse({
              authentication: true,
              msg: response.message,
              res: response,
            });
            setStatus(true);
            resetForm();
            fetchData();
          }
        } catch (err) {
          handleServerResponse({
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
            <Box sx={{ width: "95%", margin: "auto", mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item md={3.5} xs={12}></Grid>
                <Grid item md={12} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="towerName-login">Tower</InputLabel>
                    <OutlinedInput
                      id="towerName-login"
                      type="text"
                      value={values.towerName}
                      name="towerName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Tower"
                      fullWidth
                      error={Boolean(touched.towerName && errors.towerName)}
                    />
                    {touched.towerName && errors.towerName && (
                      <FormHelperText error>{errors.towerName}</FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
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
export default TowerModal;
