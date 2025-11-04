import { Currency } from "@/util/currency";

type RateChange = {
    fromCurrency: Currency;
    toCurrency: Currency;
    rate: number;
}

export const rateChanges: RateChange[] = [
    { fromCurrency: Currency.NIO, toCurrency: Currency.USD, rate: 35.1 },
    { fromCurrency: Currency.USD, toCurrency: Currency.NIO, rate: 35.5 },
    { fromCurrency: Currency.EUR, toCurrency: Currency.NIO, rate: 40.2 },
    { fromCurrency: Currency.NIO, toCurrency: Currency.EUR, rate: 39.7 },
];