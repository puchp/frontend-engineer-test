import React, { FC, useState, useEffect } from "react";
import { format, addDays } from "date-fns";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { DatePicker } from "@material-ui/pickers";

import { getProducts } from "../../services/product";
import { ProductType } from "../../types/Product";

import { SelectLocationType } from "../../types/Location";
import { getTotalQuantity, getTotalCost } from "../../utils";

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
  const [selectedProduct, handleProductChange] =
    useState<ProductType | undefined>();
  const [selectedDate, handleDateChange] = useState(new Date());

  const [selectedLocations, setSelectedLocations] = useState<
    SelectLocationType[] | []
  >([]);

  const [productsData, setProductsData] = useState<ProductType[] | []>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    async function getInitProductsData() {
      const initProductsData = await getProducts();
      if (initProductsData) {
        setProductsData(initProductsData);
        setIsLoadingProducts(false);
      }
    }
    setIsLoadingProducts(true);
    getInitProductsData();
  }, []);

  return (
    <Grid container className="p-1">
      <Grid item xs={12}>
        <Card className="p-1" style={{ background: "#ccc" }}>
          <Grid item xs={12} className="py-3">
            <Typography variant="subtitle1">Calculator</Typography>
          </Grid>
          <Card className="p-3 m-2">
            <Grid item xs={12} className="pb-2">
              <Typography variant="subtitle2" className="pb-1">
                Select products
              </Typography>
              <Grid item xs={12}>
                <Product
                  productsData={productsData}
                  isLoadingProducts={isLoadingProducts}
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
                  <Card className="p-3">
                    <DatePicker
                      // TODO: fix date picker style
                      // variant="inline"
                      // inputVariant="outlined"
                      // InputAdornmentProps={{ position: "end" }}
                      value={selectedDate}
                      onChange={(date) => handleDateChange(date)}
                      format={DATE_FORMAT}
                      disablePast
                      fullWidth
                      maxDate={addDays(new Date(), 7)}
                      autoOk
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          {Boolean(selectedProduct) && (
            <Card className="p-3 m-2">
              <Grid item xs={12} className="pb-2">
                <Typography variant="subtitle2">Select locations</Typography>

                <Grid item xs={12} className="mt-1">
                  <Location
                    selectedProduct={selectedProduct}
                    selectedLocations={selectedLocations}
                    setSelectedLocations={setSelectedLocations}
                  />
                </Grid>
              </Grid>
            </Card>
          )}
          {Boolean(selectedProduct && selectedLocations.length) && (
            <Card className="p-3 m-2">
              <Grid item xs={12} className="py-3">
                <Grid item xs={12} className="py-3">
                  Total Units : {getTotalQuantity(selectedLocations)}
                </Grid>

                <Grid item xs={12} className="py-3">
                  Total Cost :&nbsp;
                  {Number(
                    getTotalCost(selectedProduct, selectedLocations)
                  ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Grid>
                {Boolean(
                  selectedProduct && getTotalQuantity(selectedLocations)
                ) && (
                  <Cart
                    cartInput={{
                      date: format(selectedDate, DATE_FORMAT),
                      product: Number(selectedProduct && selectedProduct.id),
                      locations: selectedLocations.map(
                        (location: SelectLocationType) => {
                          return {
                            id: Number(location.id),
                            quantity: Number(location.quantity),
                          };
                        }
                      ),
                    }}
                  />
                )}
              </Grid>
            </Card>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Calculator;
