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
  profilePhoto: string;
  products: ProductType[];
};

const initialState: userState = {
  profilePhoto: '',
  products: [],
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
    clearProducts(state) {
      state = initialState;
    },
  },
});
