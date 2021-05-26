import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Map from "../../Map";

import { SelectLocationType } from "../../../types/Location";

type LocationHeaderPropsType = {
  selectedLocations: SelectLocationType[];
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectLocationType[] | []>
  >;
};

const LocationHeader: FC<LocationHeaderPropsType> = (props) => {
  const { selectedLocations, setSelectedLocations } = props;

  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={2}>
        <Typography variant="subtitle1">Place</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Unit</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">Cost</Typography>
      </Grid>
      <Grid item xs={2} container justify="center">
        <Map
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
        />
      </Grid>
      <div className="my-2 border w-100" />
    </Grid>
  );
};

export default LocationHeader;
