export type LocationType = {
  id: string;
  createdAt: string;
  lat: number;
  long: number;
  name: string;
  fee: number;
  max_dist: number;
};

export type SelectLocationType = {
  id: string;
  createdAt: string;
  lat: number;
  long: number;
  name: string;
  fee: number;
  max_dist: number;
  quantity: number; // added for calculation
};
