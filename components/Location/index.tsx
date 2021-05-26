import React, { FC } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import { ProductType } from "../../types/Product";
import { SelectLocationType } from "../../types/Location";

import LocationHeader from "./LocationHeader";
import LocationList from "./LocationList";

type LocationPropsType = {
  isLoadingLocations: boolean;
  selectedLocations: SelectLocationType[];
  selectedProduct: ProductType | undefined;
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectLocationType[] | []>
  >;
};

const Location: FC<LocationPropsType> = (props) => {
  const {
    isLoadingLocations,
    selectedLocations,
    selectedProduct,
    setSelectedLocations,
  } = props;

  return (
    <Grid container justify="center">
      {isLoadingLocations ? (
        <Grid container justify="center" className="m-2">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container justify="center">
          <LocationHeader />
          <LocationList
            selectedProduct={selectedProduct}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Location;
