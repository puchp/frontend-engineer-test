import axios from "axios";

import { API_URL } from "../configs";
import { LocationType } from "../types/Location";

// Locations
// Endpoint: GET ​API_URL/locations Returns an array of Location objects

// The Location object is made up of:
// ● Id
// ● Name: Name of the location
// ● Lat: the Latitude of the location
// ● Long: the Longitude of the location
// ● Max Dist: the total number of items that can be distributed in one day at the location
// ● Fee: Daily fee of distributing items at the location

export const mockLocation: LocationType[] = [
  {
    id: "1",
    createdAt: "2020-06-29T18:20:23.578Z",
    lat: 13.7370587,
    long: 100.5603061,
    name: "Asoke",
    fee: 1000,
    max_dist: 1000,
  },
  {
    id: "2",
    createdAt: "2020-06-29T19:23:58.106Z",
    lat: 13.7398994,
    long: 100.5391488,
    name: "Nana",
    fee: 950,
    max_dist: 1500,
  },
  {
    id: "3",
    createdAt: "2020-06-29T21:41:07.134Z",
    lat: 13.7423522,
    long: 100.5498083,
    name: "Chidlom",
    fee: 1200,
    max_dist: 2000,
  },
  {
    id: "4",
    createdAt: "2020-06-30T01:45:14.659Z",
    lat: 13.7452037,
    long: 100.5320311,
    name: "Siam",
    fee: 1500,
    max_dist: 2500,
  },
  {
    id: "5",
    createdAt: "2020-06-29T20:40:36.633Z",
    lat: 13.7352189,
    long: 100.5367189,
    name: "Sala Daeng",
    fee: 1500,
    max_dist: 1750,
  },
];

export const getLocations = async () => {
  try {
    const response = await axios.get(`${API_URL}/locations`);
    console.log("response: ", response);
    return (response && response.data) || [];
  } catch (error) {
    console.log("Request error", error.message);
    return [];
  }
};
