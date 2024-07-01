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
function NIHHSS() {
  // state for zoom ogf the node
  const [zoomState, setZoomState] = useState({});
  // state for the show details in card
  const [showDetails, setShowDetails] = useState(false);
  const [detailsNode, setDetailsNode] = useState(null);

  console.log("detailsNode", detailsNode);

  const tabIndex = useSelector((state) => state.HeaderTab);


  const towersData = [
    { id: "towerA", name: "Tower A", data: TowerA },
    { id: "towerB", name: "Tower B", data: TowerB }, // Assuming TowerB is imported or defined elsewhere
    { id: "towerC", name: "Tower C", data: TowerC }
  ];

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
                      {tower.name}
                    </Typography>
                    <Box sx={{ height: "50vh", position: "relative" }}>
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
                        setDetailsNode={setDetailsNode}
                        detailsNode={detailsNode}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              {showDetails && detailsNode && (
                <Box sx={{ position: "absolute", top: 70, right: 1 }}>
                  {/* <LevelsCard
                    name={detailsNode.data.name}
                    children={detailsNode.data.children || []}
                  /> */}
                  <LevelsCard
                  name={detailsNode.data.name}
                  children={detailsNode.data.children || []}
                  setZoomedId={(nodeId) =>
                    setZoomState((prevState) => ({
                      ...prevState,
                      [detailsNode.data.name]: nodeId,
                    }))
                  }
                />
                </Box>
              )}
              <Box sx={{ position: "absolute", right: 0, bottom: 70 }}>
                <Legends />
              </Box>
              {/* Default Data Tab */}
            </>
          ) : <></>
        }

        {/* Render this Component when 3D tab is clicked */}
        {
          tabIndex.index === 1 ? (
            <ThreeD />
          ) : tabIndex.index === 2 && (
            <Wireframe />
          )
        }
      </Container>
    </>
  )
}

export default NIHHSS