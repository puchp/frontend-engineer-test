export type ProductType = {
  id: string;
  name: string;
  max_production: Record<string, number>;
  price_per_unit: number;
};
