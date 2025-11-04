import { errorResponse } from '@/util/error-response';
import customFetch from '@/util/fetch';
import { successResponse } from '@/util/success-response';

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
    };

    const res = await customFetch<UserResponse>('http://localhost:5566/users/12345');

    if (!res || !Array.isArray(res.products)) {
      throw new Error('Invalid user response');
    }

    res.products = await Promise.all(
      res.products.map(async (product) => {
        const details = await customFetch<{
          alias: string;
          balance: number;
          currency: string;
        }>(`http://localhost:5566/accounts/${product.id}`);

        return {
          ...product,
          alias: details.alias,
          balance: details.balance,
          currency: details.currency,
        };
      }),
    );

    return successResponse(res);
  } catch (err) {
    return errorResponse('Failed to get user data', 500);
  }
}
