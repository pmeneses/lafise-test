import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductType = {
  type: string;
  id: string;
  alias: string;
  currency: string;
  balance: number;
};

type userState = {
  products: ProductType[];
};

const initialState: userState = {
  products: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    clearProducts(state) {
      state = initialState;
    },
  },
});
