import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { CardWrapper } from './commanStyle';

const DetailsCard = ({ data, smallestCircleClicked }) => {

  console.log('I am Details Node in details card component:', data);
  console.log('I am Details Smallest Circle Clicked in details card component:', smallestCircleClicked);

  return (
    <PatientDetails>
      <CardWrapper cardWidth="150px">
        <Typography variant="h6">
          {data.name}
        </Typography>
        <Typography variant="h6"
        >
          {data.color}
        </Typography>
      </CardWrapper>
    </PatientDetails>

  );
};

const PatientDetails = styled(Box)(({ theme }) => ({
  position: "absolute", top: 80, right: 5
}));



export default DetailsCard;
