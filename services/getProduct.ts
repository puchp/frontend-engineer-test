// TODO: add axios get for Products data

// Products
// Endpoint: GET ​https://5efabb3a80d8170016f758ee.mockapi.io/products

// The product object is made up of:
// ● Id
// ● Name: Name of the product
// ● Max Production: Maximum number of product available per day in the future
// ● Price Per Unit: cost per item

import { ProductType } from "../types/Product";

export const mockProducts: ProductType[] = [
  {
    id: "1",
    name: "Flyer - One Sided",
    max_production: { "1": 5000, "2": 8000, "3": 12000 },
    price_per_unit: 0.5,
  },
  {
    id: "2",
    name: "Flyer - Two Sided",
    max_production: { "1": 3000, "2": 6000, "3": 9000 },
    price_per_unit: 0.8,
  },
  {
    id: "3",
    name: "Brochure - 4 Page",
    max_production: { "1": 2500, "2": 4500, "3": 7000 },
    price_per_unit: 1.4,
  },
  {
    id: "4",
    name: "Brochure - 8 Page",
    max_production: { "1": 2000, "2": 4000, "3": 6000 },
    price_per_unit: 2.1,
  },
];
