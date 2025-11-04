export enum Currency {
  USD = 'USD',
  NIO = 'NIO',
  EUR = 'EUR',
}

export const currencySymbols: Record<Currency, string> = {
  [Currency.USD]: 'USD',
  [Currency.NIO]: 'C$',
  [Currency.EUR]: 'EUR',
};

export function formatCurrency(amount: number, currency: Currency): string {
  const symbol = currencySymbols[currency] || '';
  const formatted = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return `${symbol} ${formatted}`;
}
