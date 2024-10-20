export type TTag = {
  id: number;
  name: string;
};

export type TWarehouse = {
  id: number;
  name: string;
};

export type TProduct = {
  id: number;
  name: string;
  tags: TTag[];
  image: string;
  pricePEN: number;
  priceUSD: number;
  warehouses: TWarehouse[];
};
