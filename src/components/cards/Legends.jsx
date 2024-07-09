import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

function Legends() {
  const [showAndHide, setShowAndHide] = useState(false);
  const handleShowHideToggle = () => {
    setShowAndHide(!showAndHide);
  };
  return (
    <CardWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="#fff" sx={{ textAlign: "center" }}>
          Legend
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleShowHideToggle}
        >
          {showAndHide ? "Hide" : "Show"}
        </Button>
      </Box>
      {showAndHide ? (
        <>
          <CustomStack direction="row" gap={2}>
            <ColorBox PatientColor="#FFFF00" />
            <CustomTypo variant="body1">
              New Patient
            </CustomTypo>
          </CustomStack>
          <CustomStack
            direction="row"
            gap={2}
          >
            <ColorBox PatientColor="#bbcdec" />
            <CustomTypo variant="body1" >
            1st day after consult requested and done
            </CustomTypo>
          </CustomStack>
          <CustomStack
            direction="row"
            gap={2}
          >
            <ColorBox PatientColor="#b0cf97" />
            <CustomTypo variant="body1" >
              Never seen in followup
            </CustomTypo>
          </CustomStack>
          <CustomStack
            direction="row"
            gap={2}
          >
            <ColorBox PatientColor="#fcd2b4" />
            <CustomTypo variant="body1" >
              Signed Off
            </CustomTypo>
          </CustomStack>
          <CustomStack
            direction="row"
            gap={2}
          >
            <ColorBox PatientColor="#b8b4b2" />
            <CustomTypo variant="body1" >
            ORDER CANCELED NEVERORDERED
            </CustomTypo>
          </CustomStack>
          <CustomStack
            direction="row"
            gap={2}
          >
            <ColorBox PatientColor="#ff1b00" />
            <CustomTypo variant="body1"  color="#fff">
              TPA With out last 24 HRS
            </CustomTypo>
          </CustomStack>
          <CustomStack direction="row" gap={2} >
            <ColorBox PatientColor="pink" />
            <CustomTypo variant="body1"  color="#fff">
              New Message
            </CustomTypo>
          </CustomStack>
        </>
      ) : (
        <></>
      )}
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
  padding: "8px 20px",
  color: "#fff",
  marginRight: 10,
}));
const CustomStack = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  marginTop: 10,
  marginBottom: 10,
}));
const CustomTypo=styled(Typography)((theme)=>({
  width: "80%",
  color:'#fff'
}))
export default Legends;
