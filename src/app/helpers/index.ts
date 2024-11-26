import { TBaseProduct, TProductCart } from '@app/types';
import { validate } from 'class-validator';
import { DProductCart } from '@app/dto/product-cart.dto';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const productSymbol = (selectedCurrency: string): string => {
  switch (selectedCurrency) {
    case 'PEN':
      return `S./`;
    case 'USD':
      return `$`;
    case 'EUR':
      return `€`;
    default:
      return `S./`;
  }
};

export const productPrice = (
  selectedCurrency: string,
  product: TBaseProduct,
): number => {
  switch (selectedCurrency) {
    case 'PEN':
      return product.pricePEN;
    case 'USD':
      return product.priceUSD;
    case 'EUR':
      return product.priceEUR;
    default:
      return product.pricePEN;
  }
};

export const loadStorageCart = async (): Promise<TProductCart[]> => {
  const safeCart: TProductCart[] = [];
  try {
    const stringCart = localStorage.getItem('cart');
    if (!stringCart) return [];

    const jsonCart = JSON.parse(stringCart);
    console.log({ jsonCart });

    if (Array.isArray(jsonCart)) {
      for (const jsonCartElement of jsonCart) {
        const productCart = new DProductCart(jsonCartElement);

        await validate(productCart).then((errors) => {
          if (errors.length > 0) {
            console.error('validation failed. errors: ', errors);
          } else {
            safeCart.push(productCart);
          }
        });
      }
    }

    return safeCart;
  } catch (e) {
    console.error(e);
    return safeCart;
  }
};
