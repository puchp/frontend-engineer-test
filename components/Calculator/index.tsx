import React, { FC, useState } from "react";
import { format } from "date-fns";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { KeyboardDatePicker } from "@material-ui/pickers";

import Cart from "../Cart";
import Location from "../Location";
import Product from "../Product";

const DATE_FORMAT = "yyyy-MM-dd";
// 1) The User will pick the product and date.
//     Based on this choice the app can work out the maximum number of units available to produce on that date.
//
// 2) The User will add locations. Clicking the ADD button will open the Location Map.
//     Once a location is added the user can click and adjust the number of units for that location.
//
// 3) The Location cost will be the cost of the units for that location and the location fee.
//
// 4) As locations are added and configured the Total Units and Total Cost will update automatically.
//    Locations can be removed by clicking on the X button on it’s row.
//
// 5) On Submit then post to the Cart endpoint and show the user a simple success page.

type CalculatorPropsType = {};

const Calculator: FC<CalculatorPropsType> = () => {
  const [selectedProduct, handleProductChange] = useState<string>("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedLocations, handleLocationChange] = useState([
    {
      id: 1,
      quantity: 100,
    },
  ]);

  return (
    <Grid container className="p-3">
      <Grid item xs={12}>
        <Card className="p-3">
          <Grid item xs={12} className="py-3">
            <Typography variant="subtitle1">Calculator</Typography>
          </Grid>

          <Grid item xs={12} className="pb-2">
            <Typography variant="subtitle2" className="pb-1">
              Select products
            </Typography>
            <Grid item xs={12}>
              <Product
                selectedProduct={selectedProduct}
                handleProductChange={handleProductChange}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} className="pb-2">
            <Grid container>
              <Grid item xs={12} className="pb-1">
                <Typography variant="subtitle2">Select date</Typography>
              </Grid>
              <Grid item xs={12}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  format={DATE_FORMAT}
                  value={selectedDate}
                  InputAdornmentProps={{ position: "end" }}
                  onChange={(date) => handleDateChange(date)}
                  autoOk
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className="pb-2">
            <Typography variant="subtitle2" className="pb-1">
              Select locations
            </Typography>
            <Grid item xs={12}>
              <Location />
            </Grid>
          </Grid>

          <Card className="p-3 m-2">
            <Grid item xs={12} className="py-3">
              <Cart
                cartInput={{
                  date: format(selectedDate, DATE_FORMAT),
                  product: Number(selectedProduct),
                  locations: selectedLocations,
                }}
              />
            </Grid>
          </Card>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Calculator;
