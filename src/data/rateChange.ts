type RateChange = {
    fromCurrency: string;
    toCurrency: string;
    rate: number;
}

export const rateChanges: RateChange[] = [
    { fromCurrency: "NIO", toCurrency: "USD", rate: 35.1 },
    { fromCurrency: "USD", toCurrency: "NIO", rate: 35.5 },
    { fromCurrency: "EUR", toCurrency: "NIO", rate: 40.2 },
    { fromCurrency: "NIO", toCurrency: "EUR", rate: 39.7 },
];