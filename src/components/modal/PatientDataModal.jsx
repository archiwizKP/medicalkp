import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

function PatientDataModal({ open, setOpen, PatientData }) {
  const [scroll, setScroll] = React.useState("paper");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      scroll={scroll}
    >
      <DialogTitle
        id="responsive-dialog-title"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        {PatientData.name} {PatientData.type}
        <Button onClick={handleClose} autoFocus>
          X
        </Button>
      </DialogTitle>

      <DialogContent dividers={scroll === "paper"}>
        <Grid container spacing={1}>
          <Grid item md={5}>
            <DialogContentText
              ref={descriptionElementRef}
              tabIndex={-1}
              gap={2}
            >
              <Button variant="outlined" color="primary">
                Hide PHI
              </Button>
              <Typography variant="h6">35 | M | 85kg | H00740943659</Typography>
              <Typography variant="h6">
                14 - OTHER -SUNSHINE HIX AMBETTER
              </Typography>
              <Stack
                direction={"row"}
                sx={{ alignItems: "center", backgroundColor: "#E8E8E8", p: 1 }}
                gap={2}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography variant="h5" color="initial">
                  Add patient to MDR
                </Typography>
                <Button variant="outlined" color="primary">
                  +
                </Button>
              </Stack>
              <Typography variant="h6">Chief Complaint</Typography>
              <Typography variant="h6">Admitted</Typography>
              <Typography variant="h6">Forecast DRG</Typography>
              <Typography variant="h6">Description</Typography>
              <Typography variant="h6">Actual LOS</Typography>
              <Typography variant="h6">Anticipated Discharge Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Typography variant="h6">Flag for administration</Typography>
              <Stack
                direction={"row"}
                gap={1}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Button variant="contained" color="primary">
                  Email Patient Info
                </Button>
                <Button variant="contained" color="primary">
                  Share Link
                </Button>
              </Stack>
            </DialogContentText>
          </Grid>
          <Grid item md={7}>
            <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
              <Box sx={{ typography: "body1", width: 400 }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="DDD" value="1" />
                      <Tab label="Outstanding Orders" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Box display="flex" flexDirection={"column"} gap={2}>
                      <Box display="flex" mx="" my="" sx="">
                        <Grid container spacing={2}>
                          <Grid item md={6}>
                            <Typography variant="h5" color="initial">
                              Discharge : N/A
                            </Typography>
                            <Typography variant="h6" color="initial">
                              Order Type : N/A
                            </Typography>
                            <Typography variant="h6" color="initial">
                              Time since order : N/A
                            </Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Typography variant="h5" color="initial">
                              Med Rec
                            </Typography>
                            <Typography variant="h6" color="initial">
                              Discharge Summary: N/A
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Divider />
                      <Box display="flex" mx="" my="" sx="">
                        <Grid container spacing={2}>
                          <Grid item md={6}>
                            <Typography variant="h5" color="initial">
                              Placement : N/A
                            </Typography>
                            <Typography variant="h6" color="initial">
                              DPE discharge plan : N/A
                            </Typography>
                            <Typography variant="h6" color="initial">
                              Referral : N/A
                            </Typography>
                          </Grid>
                          <Grid item md={6}>
                            <Typography variant="h5" color="initial">
                              Booked provider : N/A
                            </Typography>
                            <Typography variant="h6" color="initial">
                              PAC bed Availability
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Select Date"
                                value={selectedDate}
                                onChange={(newValue) => {
                                  setSelectedDate(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </Grid>
                        </Grid>
                      </Box>
                      <Divider />
                      <Typography variant="h5">
                        Add goal for progression to discharge
                      </Typography>
                      <TextField
                        id="comment"
                        label="Write new comment and press enter"
                        // value={}
                        // onChange={}
                      />
                      <Divider />
                      <Grid container spacing={1}>
                        {/* <Typography variant="h4">Barriers</Typography> */}
                        <Grid item md={6}>
                          <Typography variant="h6" color="initial">
                            Add progression barriers
                          </Typography>
                          <TextField
                            id="barrier"
                            label="Search all barriers"
                            //  value={}
                            //  onChange={}
                          />
                          <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                          >
                            <Button variant="text" color="primary">
                              Add
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item md={6}>
                          <Typography variant="h6" color="initial">
                            Add progression barriers
                          </Typography>
                          <TextField
                            id="barrier"
                            label="Search all barriers"
                            //  value={}
                            //  onChange={}
                          />
                          <Box
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                          >
                            <Button variant="text" color="primary">
                              Add
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </TabPanel>
                  <TabPanel value="2">
                    <Box display="flex" flexDirection={"column"} gap={1}>
                      <Typography variant="h4">Order</Typography>
                      <Typography variant="h5" color="initial">
                        Outstanding 2
                      </Typography>
                      <Divider />
                      <Typography variant="h4">
                        COMPREHENSIVE METABOLIC PANEL
                      </Typography>
                      <Typography variant="h6">
                        Lorem ipsum dolor sit amet consectetur
                      </Typography>
                      <Typography variant="h4">
                        COMPREHENSIVE METABOLIC PANEL
                      </Typography>
                      <Typography variant="h6">
                        Lorem ipsum dolor sit amet consectetur
                      </Typography>
                      <Divider />

                      <Typography variant="h5" color="initial">
                        Nursing Intervention
                      </Typography>
                      <Divider />
                    </Box>
                  </TabPanel>
                </TabContext>
              </Box>
            </DialogContentText>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default PatientDataModal;
