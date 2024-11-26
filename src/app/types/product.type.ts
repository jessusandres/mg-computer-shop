export const Payments: Map<string, string> = new Map(
  Object.entries({
    CARD: 'tarjeta de crédito/debito',
    EFFECTIVE: 'transferencia/billetera virtual',
  }),
);

export type TCategory = {
  id: number;
  name: string;
};

export type TTag = {
  id: number;
  name: string;
};

export type TWarehouse = {
  id: number;
  name: string;
};

export type TDiscount = {
  method: string;
  amount: number;
};

export type TBaseProduct = {
  id: number;
  name: string;
  image: string;
  pricePEN: number;
  priceUSD: number;
  priceEUR: number;
};

export type TProduct = TBaseProduct & {
  description: string;
  tags: TTag[];
  warehouses: TWarehouse[];
  stock: number;
  discounts: TDiscount[];
  sku: string;
  categories: TCategory[];
};

export type TProductCart = TBaseProduct & {
  quantity: number;
  warehouse: number;
};
