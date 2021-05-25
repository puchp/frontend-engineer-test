import React, { FC } from "react";
import Product from "../Product";
import Location from "../Location";
import Cart from "../Cart";

// The User will pick the product and date. Based on this choice the app can work out the maximum number of units available to produce on that date.
// The User will add locations. Clicking the ADD button will open the Location Map. Once a location is added the user can click and adjust the number of units for that location.
// The Location cost will be the cost of the units for that location and the location fee.
// As locations are added and configured the Total Units and Total Cost will update automatically. Locations can be removed by clicking on the X button on it’s row.
// On Submit then post to the Cart endpoint and show the user a simple success page.

type CalculatorPropsType = {
  // props: string;
};

const Calculator: FC<CalculatorPropsType> = () => {
  return (
    <div>
      "Calculator"
      <br />
      <Product />
      <hr />
      <Location />
      <hr />
      <Cart />
    </div>
  );
};

export default Calculator;
