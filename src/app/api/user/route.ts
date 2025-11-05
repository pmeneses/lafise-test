import { errorResponse } from '@/util/error-response';
import customFetch from '@/util/fetch';
import { successResponse } from '@/util/success-response';

const getAccountDetails = async (accountId: string) => {
  return await customFetch<{
    alias: string;
    balance: number;
    currency: string;
  }>(`http://localhost:5566/accounts/${accountId}`);
};

const getAccountTransactions = async (accountId: string) => {
  type TransactionAmount = {
    currency: string;
    value: number;
  };

  type TransactionItem = {
    transaction_number: string;
    description: string;
    bank_description: string;
    transaction_type: string;
    amount: TransactionAmount;
    origin: string;
    destination: string;
  };

  type TransactionsResponse = {
    page: number;
    size: number;
    next: number;
    total_count: number;
    items: TransactionItem[];
  };

  return await customFetch<TransactionsResponse>(
    `http://localhost:5566/accounts/${accountId}/transactions`,
  );
};

export async function GET(_: Request) {
  try {
    type UserResponse = {
      full_name: string;
      profile_photo: string;
      products: {
        type: string;
        id: string;
        alias: string;
        currency: string;
        balance: number;
      }[];
      transactions: {
        date: string;
        transaction_number: string;
        description: string;
        bank_description: string;
        transaction_type: string;
        amount: number;
        currency: string;
        origin: string;
        destination: string;
        balance: number;
      }[];
    };

    const res = await customFetch<UserResponse>('http://localhost:5566/users/12345');

    if (!res || !Array.isArray(res.products)) {
      throw new Error('Invalid user response');
    }

    res.transactions = [];

    const enhanced = await Promise.all(
      res.products.map(async (product) => {
        const [detailsRes, txRes] = await Promise.all([
          getAccountDetails(product.id).catch(() => null),
          getAccountTransactions(product.id).catch(() => null),
        ]);

        const txItems = Array.isArray(txRes?.items) ? txRes!.items : [];

        const mappedTx = txItems.map((trx) => ({
          origin: trx.origin,
          transaction_number: trx.transaction_number,
          description: trx.description,
          bank_description: trx.bank_description,
          transaction_type: trx.transaction_type,
          amount: trx.amount?.value ?? 0,
          currency: trx.amount?.currency ?? product.currency ?? 'UNKNOWN',
          destination: trx.destination,
          balance: detailsRes?.balance ?? 0,
          date: new Date().toISOString(),
        }));

        return {
          product: {
            ...product,
            alias: detailsRes?.alias ?? product.alias,
            balance: detailsRes?.balance ?? product.balance ?? 0,
            currency: detailsRes?.currency ?? product.currency,
          },
          transactions: mappedTx,
        };
      }),
    );

    const trxSeen = new Set<string>();
    res.products = enhanced.map((e) => e.product);
    res.transactions = enhanced
      .flatMap((e) => e.transactions)
      .filter((tx) => {
        const key = tx.transaction_number;
        if (trxSeen.has(key)) return false;
        trxSeen.add(key);
        return true;
      });

    return successResponse(res);
  } catch (err) {
    return errorResponse('Failed to get user data', 500);
  }
}
