import React from "react";
import { CardWrapper } from "./commanStyle";
import { Stack, Link, Typography } from "@mui/material";
import { colorObject } from "../../themes/customColors";

function LevelsCard({ name, children, setZoomedId }) {
  return (
    <CardWrapper cardWidth="150px">
      <Typography variant="h5" sx={{ textAlign: "center", mb: 1, color: colorObject.white }} color="initial">{name}</Typography>
      <Stack direction="column" gap={2}>
        {children.map((child, index) => (
          <Link
            key={index}
            underline="none"
            component="button"
            variant="h5"
            onClick={() => {
              setZoomedId(child);
            }}
          >
            {child.name}
          </Link>
        ))}
      </Stack>
    </CardWrapper>
  );
}

export default LevelsCard;
