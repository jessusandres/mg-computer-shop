import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Project */
import { TProductCart } from '~/types';

export type CartStateType = {
  cart: TProductCart[];
  cartMenu: boolean;
};

type TCartReducer<T> = CaseReducer<CartStateType, PayloadAction<T>>;

const removeProductFromCart: TCartReducer<{ cartProduct: TProductCart }> = (
  state,
  action,
) => {
  const {
    payload: { cartProduct },
  } = action;

  const newCartItems = state.cart.filter(
    (product) => product.id !== cartProduct.id,
  );

  state.cart = newCartItems;

  localStorage.setItem('cart', JSON.stringify(newCartItems));
};

const addProductToCart: TCartReducer<{
  cartProduct: TProductCart;
  openCartMenu: boolean;
}> = (state, action) => {
  // state.cart.push(action.payload.cartProduct);
  const {
    payload: { cartProduct, openCartMenu },
  } = action;

  const existsProduct = state.cart.find(
    (product) => product.id === cartProduct.id,
  );

  if (existsProduct) {
    const previousAmount = existsProduct.quantity;
    removeProductFromCart(state, action);

    state.cart = [
      ...state.cart,
      { ...cartProduct, quantity: cartProduct.quantity + previousAmount },
    ];
  } else {
    state.cart.push(action.payload.cartProduct);
  }

  localStorage.setItem('cart', JSON.stringify(state.cart));

  state.cartMenu = openCartMenu;
};

const replaceCart: TCartReducer<{
  cart: TProductCart[];
}> = (state, action) => {
  state.cart = action.payload.cart;
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartMenu: false,
    cart: [],
  } satisfies CartStateType as CartStateType,
  reducers: {
    showCartMenu: (state) => {
      state.cartMenu = true;
    },
    hideCartMenu: (state) => {
      state.cartMenu = false;
    },
    addProductToCart,
    removeProductFromCart,
    replaceCart,
  },
});

export const CartActions = CartSlice.actions;
