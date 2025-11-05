import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { set } from 'react-hook-form';

type ProductType = {
  type: string;
  id: string;
  alias: string;
  currency: string;
  balance: number;
};

type userState = {
  name: string;
  profilePhoto: string;
  products: ProductType[];
  cards: {
    accountMask: string;
    expirationDate: string;
    type: string;
  }[];
};

const initialState: userState = {
  name: '',
  profilePhoto: '',
  products: [],
  cards: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    setProfilePhoto(state, action: PayloadAction<string>) {
      state.profilePhoto = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setCards(
      state,
      action: PayloadAction<{ accountMask: string; expirationDate: string; type: string }[]>,
    ) {
      state.cards = action.payload;
    },
    clearProducts(state) {
      state = initialState;
    },
  },
});
