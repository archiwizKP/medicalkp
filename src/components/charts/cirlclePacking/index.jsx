import React, { useEffect } from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
export default function MyResponsiveCirclePacking({
  data,
  setZoomedId,
  zoomedId,
  setShowDetails,
  showDetails,
  setDetailsNode,
  detailsNode,
  tower,
  setSmallestCircleClicked
}) {
  return (
    <ResponsiveCirclePacking
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="loc"
      colors={{ scheme: "nivo" }}
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
        console.log("this is node",node);
        // Toggle zoom based on the clicked node's ID
        setZoomedId(zoomedId === node.id ? null : node.id);
      }}
      onMouseEnter={(node) => {
        // setZoomedId(zoomedId === node.id ? null : node.id);
        // Check if the node is the root node
        if (node.depth === 0) {
          // Assuming 'depth'f is available and root has depth 0
          setDetailsNode(node);
          setShowDetails(true);
        } 
        else if (node.depth === 3) {
          console.log('I am node Depth in index.js cirlepacking component', node.depth);
          setDetailsNode(node);
          setSmallestCircleClicked(true);
        }
        else {
          setShowDetails(false);
          setSmallestCircleClicked(false);
        }
      }}

      // onMouseLeave={() => {
      //   setShowDetails(false);
      // }}
    />
  );
}