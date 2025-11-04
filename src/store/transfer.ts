import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TransferType = {
  step: number;
  accountFrom: string;
  accountFromType: string;
  accountTo: string;
  accountToType: string;
  amount: number;
  debitConcept: string;
  creditConcept: string;
  reference: string;
  sendConfirmationTo: string;
};

const initialState: TransferType = {
  step: 1,
  accountFrom: '',
  accountFromType: '',
  accountTo: '',
  accountToType: '',
  amount: 0,
  debitConcept: '',
  creditConcept: '',
  reference: '',
  sendConfirmationTo: '',
};

export const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    addAccountFrom(
      state,
      action: PayloadAction<Pick<TransferType, 'step' | 'accountFrom' | 'accountFromType'>>,
    ) {
      state.step = action.payload.step;
      state.accountFrom = action.payload.accountFrom;
      state.accountFromType = action.payload.accountFromType;
    },
    addAccountTo(
      state,
      action: PayloadAction<Pick<TransferType, 'step' | 'accountTo' | 'accountToType'>>,
    ) {
      state.step = action.payload.step;
      state.accountTo = action.payload.accountTo;
      state.accountToType = action.payload.accountToType;
    },
    addAmount(state, action: PayloadAction<Pick<TransferType, 'step' | 'amount'>>) {
      state.step = action.payload.step;
      state.amount = action.payload.amount;
    },
    addAditionalData(
      state,
      action: PayloadAction<
        Pick<
          TransferType,
          'step' | 'debitConcept' | 'creditConcept' | 'reference' | 'sendConfirmationTo'
        >
      >,
    ) {
      state.step = action.payload.step;
      state.debitConcept = action.payload.debitConcept;
      state.creditConcept = action.payload.creditConcept;
      state.reference = action.payload.reference;
      state.sendConfirmationTo = action.payload.sendConfirmationTo;
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    clear() {
      return initialState;
    },
  },
});
