'use client';

import customFetch from '@/util/fetch';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { userSlice } from '@/store/accountSlice';
import { transactionSlice } from '@/store/transaction';
import React from 'react';

type Account = {
  type: 'Account';
  id: string;
  alias: string;
  balance: number;
  currency: string;
};

type ResponseType = {
  full_name: string;
  profile_photo: string;
  products: Account[];
  transactions: {
    transaction_number: string;
    description: string;
    bank_description: string;
    transaction_type: string;
    amount: number;
    currency: string;
    origin: string;
    destination: string;
    date: string;
    balance: number;
  }[];
  cards: {
    accountMask: string;
    expirationDate: string;
    type: string;
  }[];
};

const useGetUser = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector((state) => state.transaction);
  const runningRef = React.useRef(false);

  const execute = async () => {
    try {
      if (runningRef.current) return;

      runningRef.current = true;
      const result = await customFetch<ResponseType>('http://localhost:3000/api/user').catch(() => {
        return null;
      });

      if (result) {
        dispatch(userSlice.actions.setName(result.full_name));
        dispatch(userSlice.actions.setCards(result.cards));
        dispatch(userSlice.actions.addProducts(result.products));
        dispatch(userSlice.actions.setProfilePhoto(result.profile_photo));
        dispatch(
          transactionSlice.actions.addItems(
            result.transactions
              .filter((trx) => !transactions.some((t) => t.description === trx.description))
              .map((trx) => {
                return {
                  date: trx.date,
                  description: trx.description,
                  amount: trx.amount,
                  balance: trx.balance,
                  currency: trx.currency,
                };
              }),
          ),
        );
      }
    } finally {
      runningRef.current = false;
    }
  };

  return { execute };
};

export default useGetUser;
