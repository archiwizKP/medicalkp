import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function CustomAlert({ text, type }) {
  return (
    <Stack sx={{ width: "90%", margin: "auto" }} spacing={2}>
      <Alert variant="filled" severity={type}>
        {text}
      </Alert>
    </Stack>
  );
}
