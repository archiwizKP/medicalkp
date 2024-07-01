import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { CardWrapper } from "./commanStyle";

function Legends() {
  return (
    <CardWrapper>
      <Typography variant="h2" color="#fff" sx={{ textAlign: "center" }}>
        Legend
      </Typography>
      <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1 }}>
        <ColorBox PatientColor="#102C57" />

        <Typography variant="body1" color="#fff">
          Stroke
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1 }}>
        <ColorBox PatientColor="#000" />

        <Typography variant="body1" color="#fff">
          Seizure/ Epileptic disorder
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1 }}>
        <ColorBox PatientColor="#10439F" />
        <Typography variant="body1" color="#fff">
          Neuropathies
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1 }}>
        <ColorBox PatientColor="red" />
        <Typography variant="body1" color="#fff">
          Critical Patients
        </Typography>
      </Stack>
    </CardWrapper>
  );
}




const ColorBox = styled(Box)(({PatientColor}) => ({
  backgroundColor: PatientColor,
  width: 20,
  height: 20,
  borderRadius: "50%",
}));
export default Legends;
