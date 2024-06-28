import React, { useEffect } from "react";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
function MyResponsiveCirclePacking({
  data,
  setZoomedId,
  zoomedId,
  setShowDetails,
  showDetails,
  setDetailsNode,
  detailsNode,
  tower,
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
        // Toggle zoom based on the clicked node's ID
        setZoomedId(zoomedId === node.id ? null : node.id);
      }}
      onMouseEnter={(node) => {
        // Check if the node is the root node
        if (node.depth === 0) {
          // Assuming 'depth' is available and root has depth 0
          setDetailsNode(node);
          setShowDetails(true);
        } else {
          setShowDetails(false);
        }
      }}

      onMouseLeave={() => {
        setShowDetails(false);
      }}
    />
  );
}

export default MyResponsiveCirclePacking;
