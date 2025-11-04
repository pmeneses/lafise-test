import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type transactionState = {
  date: string;
  description: string;
  amount: number;
  balance: number;
};

const initialState: transactionState[] = [];

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    add(state, action: PayloadAction<transactionState>) {
      state.push(action.payload);
    },
    clearProducts(state) {
      state = initialState;
    },
  },
});
