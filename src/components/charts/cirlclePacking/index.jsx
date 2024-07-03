import React, { useState } from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import { Typography } from "@mui/material";
import { CardWrapper } from "../../cards/commanStyle";

const CustomTooltip = ({ node, position }) => {
  const { x, y } = position;
  return (
    <CardWrapper
      cardWidth="200px"
    >
      <Typography variant="h6">{node.data.name}</Typography>
      <Typography variant="h6">{node.data?.type}</Typography>
      {node.data.Inpatient_occupancy && (
        <>
          <Typography variant="h6">
            Inpatient occupancy : {node.data?.Inpatient_occupancy}
          </Typography>
          <Typography variant="h6">
            Total inpatient beds : {node.data?.Total_inpatient_beds}
          </Typography>
          <Typography variant="h6">
            Total inpatients : {node.data?.Total_inpatients}
          </Typography>
          <Typography variant="h6">
            Potential discharges today : {node.data?.Potential_discharges_today}
          </Typography>
          <Typography variant="h6">
            Potential discharges tomorrow : {node.data?.Potential_discharges_tomorrow}
          </Typography>
          <Typography variant="h6">Available : {node.data?.Available}</Typography>
          <Typography variant="h6">
            Total blocked beds: {node.data?.Total_blocked_beds}
          </Typography>
        </>
      )}
    </CardWrapper>
  );
};

export default function MyResponsiveCirclePacking({
  data,
  setZoomedId,
  zoomedId,
  setShowDetails,
  setDetailsNode,
  detailsNode,
  tower,
  setSmallestCircleClicked,
  setDialogOpen
}) {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);

  // Define colors array with default scheme
  const colors = [
    "hsl(210, 70%, 50%)",
    "hsl(120, 70%, 50%)",
    "hsl(60, 70%, 50%)",
    "hsl(300, 70%, 50%)",
    "hsl(0, 70%, 50%)",
  ];

  // Function to dynamically assign colors based on node data
  const getFillColor = (node) => {
    if (node.data.type === "Stroke") {
      return "#102C57"; // Custom color for Stroke
    } else if (node.data.type === "Neuropathies") {
      return "#10439F"; // Custom color for Neuropathies
    } else if (node.data.type === "Critical Patients") {
      return "#EE4B2B"; // Custom color for Critical Patients
    } else if (node.data.type === "Seizure/ Epileptic disorder") {
      return "#000"; // Custom color for Seizure/ Epileptic disorder
    } else {
      // Return default color based on index if not Stroke or Neuropathies
      return colors[node.depth % colors.length];
    }
  };

  return (
      <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={(node) => getFillColor(node)} // Dynamic color assignment
        childColor={{
          from: "color",
          modifiers: [["brighter", 0.4]],
        }}
        padding={4}
        enableLabels={false}
        labelsFilter={(n) => n.node.depth === 2}
        labelsSkipRadius={10}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "none",
            color: "inherit",
            rotation: -45,
            lineWidth: 5,
            spacing: 8,
          },
        ]}
        fill={[
          {
            match: { depth: 1 },
            id: "lines",
          },
        ]}
        zoomedId={zoomedId} // Use the zoomedId state here
        motionConfig="slow" // Animation configuration
        onClick={(node) => {
          console.log("Clicked node:", node);
          // Toggle zoom based on the clicked node's ID
          setZoomedId(zoomedId === node.id ? null : node.id);
          if (node.depth === 3) {
            setDetailsNode(node);
            setDialogOpen(true);
          }
        }}
        onMouseEnter={(node, event) => {
          if (node.depth === 0) {
            // Root node
            setDetailsNode(node);
            setShowDetails(true);
          } else if (node.depth === 3) {
            // Smallest circle node
            setDetailsNode(node);
          } else if (node.depth === 3) {
            console.log("I am node Depth in index.js circle packing component", node.depth);
            setDetailsNode(node);
          } else {
            setShowDetails(false);
          }
          // Capture mouse coordinates and set hovered node
          setTooltipPosition({ x: event.clientX, y: event.clientY });
          setHoveredNode(node.id);
        }}
        onMouseLeave={() => {
          // Clear hovered node on mouse leave
          setHoveredNode(null);
        }}
        borderWidth={(node) => (hoveredNode === node.id ? 8 : 2)} // Dynamic border width
        borderColor={(node) =>
          hoveredNode === node.id ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.3)" // Dynamic border color
        }
        tooltip={(node) => <CustomTooltip node={node} position={tooltipPosition} />}
      />
  );
}
