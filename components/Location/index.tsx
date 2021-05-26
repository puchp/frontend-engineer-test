import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";

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
      <LocationList
        selectedDate={selectedDate}
        selectedProduct={selectedProduct}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
      />
    </Grid>
  );
};

export default Location;
