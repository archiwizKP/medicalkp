import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

function Legends() {
  const [showAndHide, setShowAndHide] = useState(false);
  const handleShowHideToggle = () => {
    setShowAndHide(!showAndHide);
  }
  return (
    <CardWrapper>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: "5px" }}>
        <Typography variant="h5" color="#fff" sx={{ textAlign: "center" }}>
          Legend
        </Typography>
        <Button variant="outlined" size="small" color="secondary" sx={{ mt: 0.5 }} onClick={handleShowHideToggle}>{showAndHide ? "Hide" : "Show"}</Button>
      </Box>
      {
        showAndHide ? (
          <>
            <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1, mb: 1 }}>
              <ColorBox PatientColor="#102C57" />
              <Typography variant="body1" color="#fff">
                Stroke
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1, mb: 1 }}>
              <ColorBox PatientColor="#000" />
              <Typography variant="body1" color="#fff">
                Seizure/ Epileptic disorder
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1, mb: 1 }}>
              <ColorBox PatientColor="#10439F" />
              <Typography variant="body1" color="#fff">
                Neuropathies
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1, mb: 1 }}>
              <ColorBox PatientColor="red" />
              <Typography variant="body1" color="#fff">
                Critical Patients
              </Typography>
            </Stack>

          </>
        ) : (<></>)
      }
    </CardWrapper>
  );
}
// For Color Box
const ColorBox = styled(Box)(({ PatientColor }) => ({
  backgroundColor: PatientColor,
  width: 20,
  height: 20,
  borderRadius: "50%",
}));
// For Parent Container
const CardWrapper = styled(Card)(({ cardWidth, bgColor }) => ({
  width: cardWidth ? cardWidth : 250,
  backgroundColor: bgColor ? bgColor : "#667BC6",
  borderRadius: 5,
  padding: '8px 20px',
  color: "#fff",
  marginRight: 10
}));
export default Legends;
