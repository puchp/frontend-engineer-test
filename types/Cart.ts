export type InputLocationType = {
  id: number;
  quantity: number;
};

export type InputCartType = {
  date: string;
  product: string;
  locations: InputLocationType[];
};
