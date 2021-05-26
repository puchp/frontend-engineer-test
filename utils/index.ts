import { LocationType, SelectLocationType } from "../types/Location";
import { ProductType } from "../types/Product";

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
