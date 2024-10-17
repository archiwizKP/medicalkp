// DashboardDefault.jsx
import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const OperatorDashboard = () => {
  return (
    <>
      <Container maxWidth="sm">
        {/* Operator */}
        <Grid container spacing={0}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              12
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Test
            </Typography>
            <Box sx={{ height: "40vh", position: "relative" }}>
              Hello, I am operator
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OperatorDashboard;
