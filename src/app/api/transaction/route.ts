import { errorResponse } from '@/util/error-response';
import customFetch from '@/util/fetch';
import { json } from '@/util/shared';
import { successResponse } from '@/util/success-response';

type Amount = {
  currency: string;
  value: number;
};

type trxResponse = {
  transaction_number: string;
  description: string;
  bank_description: string;
  transaction_type: 'Credit' | 'Debit' | string;
  amount: Amount;
  origin: string;
  destination: string;
  transaction_date: string;
};

export async function POST(req: Request) {
  try {
    const request = await req.json();
    const payload = json<{
      amount: number;
      origin: number;
      currency: string;
      destination: number;
    }>(request.data, {});

    const res = await customFetch<trxResponse>(
      'http://localhost:5566/transactions',
      {
        method: 'POST',
      },
      {
        origin: payload.origin,
        destination: payload.destination,
        amount: {
          currency: payload.currency,
          value: payload.amount,
        },
      },
    );

    return successResponse(res);
  } catch (err) {
    return errorResponse('Failed to add transaction', 500);
  }
}
