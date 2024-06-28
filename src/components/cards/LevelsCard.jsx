import React from "react";
import { CardWrapper } from "./commanStyle";
import { Stack, Button, styled, Grid } from "@mui/material";

function LevelsCard({ numberOfLevel }) {
  return (
    <CardWrapperStyling cardWidth="150px" className="card-wrapper">
      <Stack direction="column" gap={2}>
        {
          Array(numberOfLevel).fill().map((_, index) => (
            <Button key={index + 1} variant="contained">Level {index + 1}</Button>
          ))
        }
      </Stack>
    </CardWrapperStyling>
  );
}

const CustomBtn = styled(Button)({
  backgroundColor: '#1976d2', // Assuming this is your primary color
});

const CardWrapperStyling = styled(CardWrapper)({
  '@media (max-width: 600px)': {
    backgroundColor: 'red',
  },
  '@media (maxx-width: 1200px)': {
    position: 'fixed',
    left: '90%',
  },
});

export default LevelsCard;
