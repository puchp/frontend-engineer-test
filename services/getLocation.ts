// TODO: add axios get for Locations data

// Locations
// Endpoint: GET ​https://5efabb3a80d8170016f758ee.mockapi.io/locations Returns an array of Location objects

// {
// "id": "1",
// "lat": 13.7398994, "long": 100.5391488, "name": "Asoke", "fee": 1000, "max_dist": 1000
// }
// The Location object is made up of:
// ● Id
// ● Name: Name of the location
// ● Lat: the Latitude of the location
// ● Long: the Longitude of the location
// ● Max Dist: the total number of items that can be distributed in one day at the location
// ● Fee: Daily fee of distributing items at the location

import { LocationType } from "../types/Location";

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
