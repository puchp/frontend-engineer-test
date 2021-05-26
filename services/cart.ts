import axios from "axios";

import { API_URL } from "../configs";
import { InputCartType } from "../types/Cart";

// Cart
// Endpoint: POST ​API_URL/cart
// Make a post request with a body containing: ● Date

// ● Product ID
// ● Locations: Array of
//  ○ Location ID
//  ○ Quantity

// it should response
// {
//   id: "1",
//   status: "success",
//   date: "2021-05-30",
//   product: 1,
//   locations: [{ id: 1, quantity: 100 }],
// };

export const submitCart = async (submitData: InputCartType) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, { ...submitData });
    console.log("response: ", response);
    return { data: response.data };
  } catch (error) {
    console.log("Request error", error.message);
    return { data: error.response.data, message: error.message };
  }
};
