import { LocationType, SelectLocationType } from "../types/Location";
import { ProductType } from "../types/Product";
import differenceInDays from "date-fns/differenceInDays";

export const getCostBasedLocation = (
  selectedProduct: ProductType | undefined,
  location: LocationType,
  quantity: number
) => {
  if (selectedProduct) {
    // productsData
    // {
    //   id: "1",
    //   name: "Flyer - One Sided",
    //   max_production: { "1": 5000, "2": 8000, "3": 12000 },
    //   price_per_unit: 0.5,
    // },
    // LocationData
    /*{ id: "1",
      createdAt: "2020-06-29T18:20:23.578Z",
      lat: 13.7370587,
      long: 100.5603061,
      name: "Asoke",
      fee: 1000,
      max_dist: 1000, 
    }*/

    //TODO: verify this formula later
    if (quantity) {
      let calculatedCost = selectedProduct.price_per_unit * quantity;
      calculatedCost = calculatedCost + location.fee;
      return calculatedCost;
    }
  }
  return 0;
};

export const getTotalQuantity = (
  selectedLocations: SelectLocationType[] | []
) => {
  const quantityTotal = selectedLocations.reduce(function (
    prev: number,
    cur: SelectLocationType
  ) {
    return prev + cur.quantity;
  },
  0);

  return quantityTotal;
};

export const getTotalCost = (
  selectedProduct: ProductType | undefined,
  locations: SelectLocationType[] | []
) => {
  let totalCost = 0;
  if (selectedProduct) {
    locations.forEach((location: SelectLocationType) => {
      totalCost =
        totalCost +
        getCostBasedLocation(selectedProduct, location, location.quantity);
    });
  }

  return totalCost;
};

export const getMaximumAvailableProductFromDateSelected = (
  selectedProduct: ProductType | undefined,
  selectedDate: Date
) => {
  //   For the Max Production the object has a key of number of days in the future
  //   (i.e 1 is tomorrow, 2 is the day after) and the values are the number of items that can be produced (and therefore distributed) by that time.
  //   If the number of days in the future the user has picked is greater than the largest days key then use the largest key.
  //   For example if there are only values for days ahead 1, 2 and 3. If the user selects a date 5 days ahead then production value for 3 days is used.

  // selectedProduct.max_production: { "1": 5000, "2": 8000, "3": 12000 },

  if (selectedProduct && selectedProduct.max_production) {
    const maxProductionList = Object.values(selectedProduct.max_production);
    const totalDays = differenceInDays(selectedDate, new Date());
    const maxProduction =
      totalDays > maxProductionList.length
        ? maxProductionList[maxProductionList.length - 1]
        : maxProductionList[totalDays];

    console.log({ maxProduction });

    return maxProduction;
  }
  return 0;
};
