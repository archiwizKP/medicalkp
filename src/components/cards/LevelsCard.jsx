import React from "react";
import { CardWrapper } from "./commanStyle";
import { Stack, Button, styled, Link, Typography } from "@mui/material";
import { colorObject } from "../../themes/customColors";
function LevelsCard({ name,children,setZoomedId }) {
  return (
    <CardWrapper cardWidth="150px">
      <Typography variant="h5" sx={{textAlign:"center",mb:1,color:colorObject.white}} color="initial">
        {name}
      </Typography>
      <Stack direction="column" gap={2}>
      {children.map((child, index) => (
        <Link
        key={index + 1}
        underline="none"
        component="button"
        variant="h5"
        onClick={() => {
          // setZoomedId(child.name);
          console.log("this is child.name: ",child.name);
        }}
      >
        {child.name}
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



