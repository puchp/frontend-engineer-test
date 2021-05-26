import React, { FC, useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import GoogleMapReact from "google-map-react";

import { GOOGLE_MAP_API_KEY } from "../../configs";

import { SelectLocationType, LocationType } from "../../types/Location";
import { MarkerComponent } from "./Marker";
import { getLocations } from "../../services/location";

type LocationHeaderPropsType = {
  selectedLocations: SelectLocationType[];
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectLocationType[] | []>
  >;
};

const FOCUS_LOCATION_CENTER = { lat: 13.7398994, lng: 100.5391488 };
const DEFAULT_ZOOM = 13;

const Map: FC<LocationHeaderPropsType> = (props) => {
  const { selectedLocations, setSelectedLocations } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLoadingLocations, setIsLoadingLocations] = useState(false);
  const [locationsData, setLocationsData] = useState<LocationType[] | []>([]);

  const [open, setOpen] = useState(false);
  const [displayMap, setDisplayMap] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addLocation = (id: string) => {
    const findLocationById = locationsData.find(
      (location: LocationType) => location.id === id
    );

    if (findLocationById) {
      const locationsDataWithUnit: SelectLocationType[] = [
        ...selectedLocations,
        { ...findLocationById, quantity: 0 },
      ];
      setSelectedLocations(locationsDataWithUnit);
      setOpen(false);
    }
  };

  const checkIsAlreadySelectedLocation = (id: string) => {
    const findLocationById = selectedLocations.find(
      (location: LocationType) => location.id === id
    );
    if (findLocationById) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    async function getInitLocationsData() {
      const initLocationsData: LocationType[] = await getLocations();
      if (initLocationsData) {
        setLocationsData(initLocationsData);
        setIsLoadingLocations(false);
      }
    }
    setIsLoadingLocations(true);
    setDisplayMap(true); // prevent Server side render
    getInitLocationsData();
  }, []);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon fontSize="small" />
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          alignContent="center"
          className="mx-2"
        >
          <Grid item>Select Location</Grid>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className="mr-1 my-1"
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <div
          style={{
            height: fullScreen ? "100vh" : "500px",
            width: fullScreen ? "100%" : "500px",
          }}
        >
          {displayMap && !isLoadingLocations && (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: GOOGLE_MAP_API_KEY,
              }}
              defaultCenter={FOCUS_LOCATION_CENTER}
              defaultZoom={DEFAULT_ZOOM}
            >
              {locationsData.map((location: LocationType) => (
                <MarkerComponent
                  key={location.id}
                  id={location.id}
                  name={location.name}
                  lat={location.lat}
                  lng={location.long}
                  fee={location.fee}
                  max_dist={location.max_dist}
                  addLocation={addLocation}
                  disabled={checkIsAlreadySelectedLocation(location.id)}
                />
              ))}
            </GoogleMapReact>
          )}
        </div>
      </Dialog>
    </>
  );
};
export default Map;
