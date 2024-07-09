// DashboardDefault.jsx
import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MyResponsiveCirclePacking from "../../components/charts/cirlclePacking";
import { TowerA, TowerB, TowerC, TowerD } from "../../assets/mockData/data";
import Legends from "../../components/cards/Legends";
import { useSelector } from "react-redux";
import ThreeD from "../3d/3d";
import Wireframe from "../wireframe/wireframe";
import LevelsCard from "../../components/cards/LevelsCard";
import DetailsCard from "../../components/cards/DetailsCard";
import PatientDataModal from "../../components/modal/PatientDataModal";


const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // state for zoom of the node
  const [zoomState, setZoomState] = useState({});
  // state for the show details in card
  const [showDetails, setShowDetails] = useState(false);
  const [detailsNode, setDetailsNode] = useState(null);
  // redux tab global state
  const tabIndex = useSelector((state) => state.HeaderTab);
  const [smallestCircleClicked, setSmallestCircleClicked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [beds, setBeds] = useState([]);
  const [showBeds, setShowBeds] = useState(false);

  console.log("number of beds ", beds);
  const towersData = [
    { id: "towerA", data: TowerA },
    { id: "towerB", data: TowerB },
    { id: "towerC", data: TowerC },
    { id: "towerD", data: TowerD },
  ];

  console.log("this is zoomState", zoomState);

  const handleZoomStateUpdate = (child) => {
    if (detailsNode && detailsNode.tower) {
      setZoomState((prevState) => ({
        ...prevState,
        [detailsNode.tower.id]: child.name, // Ensure `detailsNode.tower.id` is accessed correctly
      }));
    }
  };
  useEffect(() => {
    const getBedsList = (detailsNode) => {
      if (!detailsNode.children) {
        return detailsNode.bedStatus ? [detailsNode] : [];
      }
      return detailsNode.children.reduce(
        (acc, child) => acc.concat(getBedsList(child)),
        []
      );
    };
    if (detailsNode) {
      let bedsList = getBedsList(detailsNode.data);
      bedsList = bedsList.filter((bed) => bed.bedStatus !== "empty");
      console.log("bedList in index", bedsList);
      setBeds(bedsList);
    }
  }, [detailsNode]);

  
  return (
    <>
      <Container maxWidth="sm">
        {tabIndex.index === 0 ? (
          <>
            {/* Default Data Tab */}
            <Grid container spacing={0}>
              {towersData.map((tower) => (
                <Grid item md={6} sm={12} xs={12} key={tower.id}>
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
                      setDetailsNode={(node) =>
                        setDetailsNode({ ...node, tower })
                      }
                      detailsNode={detailsNode}
                      setSmallestCircleClicked={setSmallestCircleClicked}
                      setDialogOpen={setDialogOpen}
                      setShowBeds={setShowBeds}
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

            {/* {
                smallestCircleClicked && detailsNode && (

                  <DetailsCard
                    data={detailsNode.data}
                    smallestCircleClicked={smallestCircleClicked}
                  />

                )
              } */}
            <Box sx={{ position: "absolute", right: 0, bottom: 70 }}>
              <Legends />
            </Box>
            {/* Default Data Tab */}
          </>
        ) : null}

        {/* Render this Component when 3D tab is clicked */}
        {tabIndex.index === 1 ? (
          <ThreeD />
        ) : tabIndex.index === 2 ? (
          <Wireframe />
        ) : null}
      </Container>

      {detailsNode && (
        <PatientDataModal
          open={dialogOpen}
          setOpen={setDialogOpen}
          PatientData={detailsNode.data}
        />
      )}

      {showBeds && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: 70,
              left: 150,
              height: 400,
              overflow: "auto",
            }}
          >
            <Typography variant="h6">{detailsNode?.data.name}</Typography>
            {detailsNode?.data.bedStatus === "empty" ? (
              <Typography variant="h6">
                Bed : {detailsNode?.data.bedStatus}
              </Typography>
            ) : (
              <Typography variant="h6">{detailsNode?.data.type}</Typography>
            )}
            <List>
              {beds.map((bed, bedIndex) => (
                <>
                  <ListItemButton
                    key={bedIndex}
                    sx={{ pl: 2 }}
                    onClick={() => {
                      setZoomState((prevState) => ({
                        ...prevState,
                        [detailsNode.tower.id]: bed.name,
                      }));
                      setDetailsNode((prevNode) => ({
                        ...prevNode,
                        data: {
                          ...prevNode.data,
                          ...bed,
                        },
                      }));
                      setShowBeds(false);
                    }}
                  >
                  
                    <Typography variant="body1" color="initial">
                    {`Bed: ${bed.name}- Status: ${bed.bedStatus}`}
                    </Typography>
                  </ListItemButton>
                  <Divider />
                </>
              ))}
            </List>
          </Box>
        </>
      )}

      
    </>
  );
};

export default DashboardDefault;
