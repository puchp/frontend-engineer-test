import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Product from "../Product";
import Location from "../Location";
import Cart from "../Cart";

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

type CalculatorPropsType = {
  // props: string;
};

const Calculator: FC<CalculatorPropsType> = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Calculator</Typography>
      </Grid>
      <hr />
      {/* <Grid item xs={12}>
        <Product />
      </Grid> */}
      <hr />
      {/* <Grid item xs={12}>
        <Location />
      </Grid> */}
      <hr />
      <Grid item xs={12}>
        <Cart />
      </Grid>
      <hr />
    </Grid>
  );
};

export default Calculator;
