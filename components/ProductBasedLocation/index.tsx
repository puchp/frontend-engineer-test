import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ProductType } from "../../types/Product";
import { SelectLocationType } from "../../types/Location";

import Header from "./Header";
import ProductBasedLocationList from "./ProductBasedLocationList";

type ProductBasedLocationPropsType = {
  selectedDate: Date;
  selectedLocations: SelectLocationType[];
  selectedProduct: ProductType | undefined;
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectLocationType[] | []>
  >;
};

const ProductBasedLocation: FC<ProductBasedLocationPropsType> = (props) => {
  const {
    selectedDate,
    selectedLocations,
    selectedProduct,
    setSelectedLocations,
  } = props;

  return (
    <Grid container justify="center">
      <Header
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
      />
      {selectedLocations.length ? (
        <ProductBasedLocationList
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

export default ProductBasedLocation;
