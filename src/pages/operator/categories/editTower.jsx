import { Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import React from "react";

const editTowerCategory = ({ values }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={3.5} xs={12}></Grid>
      <Grid item md={12} xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="towerName-login">Tower</InputLabel>
          <OutlinedInput
            id="towerName-login"
            type="text"
            value={values.towerName}
            name="towerName"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter Tower"
            fullWidth
            error={Boolean(touched.towerName && errors.towerName)}
          />
          {touched.towerName && errors.towerName && (
            <FormHelperText error>{errors.towerName}</FormHelperText>
          )}
        </Stack>
      </Grid>
      {errors.submit && (
        <Grid item xs={12}>
          <FormHelperText error>{errors.submit}</FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default editTowerCategory;
