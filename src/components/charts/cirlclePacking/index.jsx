import React from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import { Typography } from "@mui/material";
import { CardWrapper } from "../../cards/commanStyle";

const CustomTooltip = ({ node }) => {
  return (
    <><CardWrapper cardWidth="150px">
      <Typography variant="h6">
        {node.data.name}
      </Typography>
      <Typography variant="h6"
      >
        {node.data.color}
      </Typography>
      <Typography variant="h6"
      >
        {node.data?.type}
      </Typography>

    </CardWrapper>
   </>
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
}) {
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
      return "#EE4B2B"; // Custom color for Neuropathies
    } else if (node.data.type === "Seizure/ Epileptic disorder") {
      return "#000"; // Custom color for Neuropathies
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
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.5]],
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
      }}
      onMouseEnter={(node) => {
        if (node.depth === 0) {
          // Root node
          setDetailsNode(node);
          setShowDetails(true);
        } else if (node.depth === 3) {
          // Smallest circle node
          setDetailsNode(node);
          setSmallestCircleClicked(true);
        } else if (node.depth === 3) {
          console.log("I am node Depth in index.js circle packing component", node.depth);
          setDetailsNode(node);
          setSmallestCircleClicked(true);
        } else {
          setShowDetails(false);
          setSmallestCircleClicked(false);
        }
      }}
      tooltip={(node) => <CustomTooltip node={node} />}
    />
  );
}
