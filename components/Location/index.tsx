import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ProductType } from "../../types/Product";
import { SelectLocationType } from "../../types/Location";

import LocationHeader from "./LocationHeader";
import LocationList from "./LocationList";

type LocationPropsType = {
  selectedDate: Date;
  selectedLocations: SelectLocationType[];
  selectedProduct: ProductType | undefined;
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectLocationType[] | []>
  >;
};

const Location: FC<LocationPropsType> = (props) => {
  const {
    selectedDate,
    selectedLocations,
    selectedProduct,
    setSelectedLocations,
  } = props;

  return (
    <Grid container justify="center">
      <LocationHeader
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
      />
      {selectedLocations.length ? (
        <LocationList
          selectedDate={selectedDate}
          selectedProduct={selectedProduct}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
        />
      ) : (
        <Typography variant="subtitle2">Please add locations</Typography>
      )}
    </Grid>
  );
};

export default Location;
