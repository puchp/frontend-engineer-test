import axios from "axios";

import { API_URL } from "../configs";
import { ProductType } from "../types/Product";

// Products
// Endpoint: GET ​API_URL/products

// The product object is made up of:
// ● Id
// ● Name: Name of the product
// ● Max Production: Maximum number of product available per day in the future
// ● Price Per Unit: cost per item

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

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    console.log("response: ", response);
    return (response && response.data) || [];
  } catch (error) {
    console.log("Request error", error.message);
    return [];
  }
};
