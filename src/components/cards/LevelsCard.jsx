import React from "react";
import { CardWrapper } from "./commanStyle";
import { Stack, Button, styled } from "@mui/material";

function LevelsCard({numberOfLevel}) {
  return (
    <CardWrapper cardWidth="150px">
      <Stack direction="column" gap={2}>
        {
         Array(numberOfLevel).fill().map((_,index)=>(
            <Button key={index + 1}  variant="contained">Level {index +1 }</Button>
          ))
        }
      </Stack>
    </CardWrapper>
  );
}

const CustomBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));
export default LevelsCard;
