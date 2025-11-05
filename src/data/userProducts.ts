const generate8DigitId = (): number => Math.floor(10000000 + Math.random() * 90000000);

const ProductsData = [
  {
    type: 'Account',
    id: generate8DigitId().toString(),
    alias: 'Visa Platinum **** 1234',
    currency: 'USD',
    balance: 1000,
  },
];

export default ProductsData;
