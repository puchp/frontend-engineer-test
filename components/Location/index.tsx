import React, { FC, useEffect, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { LocationType } from "../../types/Location";
import { getLocations } from "../../services/location";

type LocationPropsType = {
  // props: string;
};

const Location: FC<LocationPropsType> = () => {
  const [isLoadingLocations, setIsLoadingLocations] = useState(false);
  const [locationsData, setLocationsData] = useState<LocationType[] | []>([]);

  useEffect(() => {
    async function getInitLocationsData() {
      const initLocationsData = await getLocations();
      if (initLocationsData) {
        setLocationsData(initLocationsData);
        setIsLoadingLocations(false);
      }
    }
    setIsLoadingLocations(true);
    getInitLocationsData();
  }, []);

  {
    /* id: "1",
      createdAt: "2020-06-29T18:20:23.578Z",
      lat: 13.7370587,
      long: 100.5603061,
      name: "Asoke",
      fee: 1000,
      max_dist: 1000, 
     */
  }

  return (
    <Grid container justify="center">
      {isLoadingLocations ? (
        <Grid container justify="center" className="m-2">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container justify="center">
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
          >
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
          {locationsData.map((location: LocationType) => (
            <Grid
              key={location.id}
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Typography variant="subtitle2">{location.name}</Typography>
              </Grid>
              <Grid item xs={3}>
                {/* <Typography variant="subtitle2">{location.fee}</Typography> */}
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  defaultValue={location.max_dist}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: Number(location.max_dist),
                    type: "number",
                    style: { fontSize: 14, padding: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle2">{location.max_dist}</Typography>
              </Grid>
              <Grid item xs={2} container justify="center">
                <IconButton>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Location;
