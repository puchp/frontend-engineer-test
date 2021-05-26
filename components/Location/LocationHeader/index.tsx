import React, { FC } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const LocationHeader: FC = () => {
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={3}>
        <Typography variant="subtitle1">Place</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Unit</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">Cost</Typography>
      </Grid>
      <Grid item xs={2} container justify="center">
        <Button variant="outlined">
          <AddIcon fontSize="small" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default LocationHeader;
