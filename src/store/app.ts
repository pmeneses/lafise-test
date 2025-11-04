import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type appState = {
  sidebarOpen: boolean;
};

const initialState: appState = {
  sidebarOpen: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchSidebar(state, action: PayloadAction<boolean>) {
      state.sidebarOpen = action.payload;
    },
    clearProducts(state) {
      state = initialState;
    },
  },
});
