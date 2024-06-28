import React from "react";
import { CardWrapper } from "./commanStyle";
import { Stack, Button, styled, Link, Typography } from "@mui/material";
import { colorObject } from "../../themes/customColors";
function LevelsCard({ numberOfLevel,Name }) {
  return (
    <CardWrapper cardWidth="150px">
      <Typography variant="h5" sx={{textAlign:"center",mb:1,color:colorObject.white}} color="initial">{Name}</Typography>
      <Stack direction="column" gap={2}>
        {Array(numberOfLevel)
          .fill()
          .map((_, index) => (
            <Link
              key={index + 1}
              underline="none"
              component="button"
              variant="h5"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Level {index + 1}
            </Link>
          ))}
      </Stack>
    </CardWrapper>
    
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
