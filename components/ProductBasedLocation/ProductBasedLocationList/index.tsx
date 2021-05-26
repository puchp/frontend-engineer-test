import React, { FC } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { SelectLocationType } from "../../../types/Location";
import { ProductType } from "../../../types/Product";
import {
  getCostBasedLocation,
  getMaximumAvailableProductFromDateSelected,
} from "../../../utils";

type ProductBasedLocationListPropsType = {
  selectedDate: Date;
  selectedProduct: ProductType | undefined;
  selectedLocations: SelectLocationType[];
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<SelectLocationType[] | []>
  >;
};

const ProductBasedLocationList: FC<ProductBasedLocationListPropsType> = (
  props
) => {
  const {
    selectedDate,
    selectedLocations,
    setSelectedLocations,
    selectedProduct,
  } = props;

  const removeLocation = (id: string) => {
    const newLocationsData = selectedLocations.filter(
      (location: SelectLocationType) => location.id !== id
    );
    setSelectedLocations(newLocationsData);
  };

  const handleChangeUnit = (id: string, newValue: string) => {
    setSelectedLocations([
      ...selectedLocations.map((location: SelectLocationType) => {
        if (location.id === id) {
          return { ...location, quantity: Number(newValue) };
        }
        return location;
      }),
    ]);
  };

  return (
    <>
      {selectedLocations.map((location: SelectLocationType) => {
        const maximumAmountFromProduct =
          getMaximumAvailableProductFromDateSelected(
            selectedProduct,
            selectedDate
          );

        const maximumAmount = Math.min(
          maximumAmountFromProduct,
          location.max_dist
        );

        return (
          <Grid
            key={location.id}
            container
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={2} container>
              <Typography variant="subtitle2">{location.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={location.quantity}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: Number(maximumAmount),
                  type: "number",
                  style: { fontSize: 14, padding: 9 },
                }}
                onChange={(event) => {
                  handleChangeUnit(location.id, event.target.value);
                }}
                error={location.quantity > maximumAmount}
                helperText={`maximum ${maximumAmount}`}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2">
                {Number(
                  getCostBasedLocation(
                    selectedProduct,
                    location,
                    location.quantity
                  )
                ).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
            </Grid>
            <Grid item xs={2} container justify="center">
              <IconButton onClick={() => removeLocation(location.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default ProductBasedLocationList;
