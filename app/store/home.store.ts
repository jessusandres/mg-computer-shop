import { createSlice } from '@reduxjs/toolkit';

/* Project */
import { Nullable, TProduct, TUser } from '~/types';

export type HomeStateType = {
  user: Nullable<TUser>;
  sidebar: boolean;
  modalOverlay: boolean;
  whatsappPopUp: boolean;
  productModal: Nullable<TProduct>;
  currency: string;
  categoriesMenu: boolean;
  selectedCategoryId: number;
  selectedCurrency: {
    term: string;
    symbol: string;
    exchangeValue: number;
  };
};

export const HomeSlice = createSlice({
  name: 'home',
  initialState: {
    user: null,
    sidebar: false,
    modalOverlay: false,
    whatsappPopUp: false,
    productModal: null,
    currency: 'PEN',
    categoriesMenu: true,
    selectedCategoryId: 0,
    selectedCurrency: {
      term: 'PEN',
      symbol: 'S/.',
      exchangeValue: 1,
    },
  } satisfies HomeStateType as HomeStateType,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    removeUser: (state) => {
      state.user = null;
    },
    showSidebar: (state) => {
      state.sidebar = true;
    },
    hideSidebar: (state) => {
      state.sidebar = false;
    },
    showWhatsappPopUp: (state) => {
      state.whatsappPopUp = true;
    },
    hideWhatsappPopUp: (state) => {
      state.whatsappPopUp = false;
    },
    setProductModal: (state, action) => {
      state.modalOverlay = true;
      state.productModal = action.payload.productModal;
    },
    removeProductModal: (state) => {
      state.modalOverlay = false;
      state.productModal = null;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload.categoryId;
    },
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload.currency;
    },
    showCategoriesMenu: (state) => {
      state.categoriesMenu = true;
    },
    hideCategoriesMenu: (state) => {
      state.categoriesMenu = false;
    },
  },
});

export const HomeActions = HomeSlice.actions;
