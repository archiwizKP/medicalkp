import React from 'react'
// material-ui
import { Grid, Typography, Box, Container } from "@mui/material";


// project import
import MyResponsiveCirclePacking from "../../components/charts/cirlclePacking";
import { TowerA, TowerB, TowerC } from "../../assets/mockData/data";
import { useState } from "react";
import Legends from "../../components/cards/Legends";
import LevelsCard from '../../components/cards/LevelsCard';

import { useSelector } from 'react-redux';
import ThreeD from '../3d/3d';
import Wireframe from '../wireframe/wireframe';
import DetailsCard from '../../components/cards/DetailsCard';
function NIHHSS() {
  // state for zoom ogf the node
  const [zoomState, setZoomState] = useState({});
  // state for the show details in card
  const [showDetails, setShowDetails] = useState(false);
  const [detailsNode, setDetailsNode] = useState(null);
  const [smallestCircleClicked, setSmallestCircleClicked] = useState(false);

  console.log("detailsNode", detailsNode);

  const tabIndex = useSelector((state) => state.HeaderTab);


  const towersData = [
    { id: "towerA",  data: TowerA },
    { id: "towerB",  data: TowerB }, // Assuming TowerB is imported or defined elsewhere
    { id: "towerC",  data: TowerC }
  ];
  const handleZoomStateUpdate = (child) => {
    if (detailsNode && detailsNode.tower) {
      setZoomState((prevState) => ({
        ...prevState,
        [detailsNode.tower.id]: child.name,  // Ensure `detailsNode.tower.id` is accessed correctly
      }));
    }
  };
  return (
    <>
    <Container maxWidth="sm">
      {
        tabIndex.index === 0 ? (
          <>
            {/* Default Data Tab */}
            <Grid container spacing={0}>
           
              {towersData.map((tower) => (
                <Grid item md={6} sm={12} key={tower.id}>
                   <Typography variant="body1" sx={{ textAlign: "center" }}>
                    {tower.id}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "center" }}>
                    {tower.name}
                  </Typography>
                  <Box sx={{ height: "40vh", position: "relative" }}>
                    <MyResponsiveCirclePacking
                      data={tower.data}
                      tower={tower}
                      setZoomedId={(nodeId) =>
                        setZoomState((prevState) => ({
                          ...prevState,
                          [tower.id]: nodeId,
                        }))
                      }
                      zoomedId={zoomState[tower.id]}
                      setShowDetails={setShowDetails}
                      showDetails={showDetails}
                      setDetailsNode={(node) => setDetailsNode({ ...node, tower })}
                      detailsNode={detailsNode}
                      setSmallestCircleClicked={setSmallestCircleClicked}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            {showDetails && detailsNode && (
              <Box sx={{ position: "absolute", top: 70, right: 1 }}>
                <LevelsCard
                  name={detailsNode.data.name}
                  children={detailsNode.data.children || []}
                  setZoomedId={handleZoomStateUpdate}
                />
              </Box>
            )}
            {
              smallestCircleClicked && detailsNode && (

                <DetailsCard
                  data={detailsNode.data}
                  smallestCircleClicked={smallestCircleClicked}
                />

              )
            }
            <Box sx={{ position: "absolute", right: 0, bottom: 70 }}>
              <Legends />
            </Box>
            {/* Default Data Tab */}
          </>
        ) : null
      }

      {/* Render this Component when 3D tab is clicked */}
      {tabIndex.index === 1 ? (
        <ThreeD />
      ) : tabIndex.index === 2 ? (
        <Wireframe />
      ) : null}
    </Container>
  </>
  )
}

export default NIHHSS