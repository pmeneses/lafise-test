import { countries } from '@/data/countries';
import Select from './select';
import React, { useMemo } from 'react';
import { rateChanges } from '@/data/rateChange';
import Icon from './icon';

const RateChange = () => {
  const [fromCurrency, setFromCurrency] = React.useState<string>();
  const [toCurrency, setToCurrency] = React.useState<string>();

  const [fromRate, toRate] = useMemo(() => {
    const findRate = (a?: string, b?: string) =>
      rateChanges.find((r) => r.fromCurrency === a && r.toCurrency === b);
    const fmt = (r?: { fromCurrency: string; rate: number }) =>
      r ? `${r.fromCurrency}: ${r.rate}` : undefined;

    const f = findRate(fromCurrency, toCurrency);
    const t = findRate(toCurrency, fromCurrency);
    return [fmt(f), fmt(t)];
  }, [fromCurrency, toCurrency]);

  return (
    <div className="mx-4 flex flex-col gap-4">
      <div className="h-px bg-[#F0F0F0]" />
      <p className="text-label font-semibold headline3">Tasa de cambio</p>
      <div className="flex gap-2.5">
        <Select
          value={fromCurrency}
          placeholder="Córdoba"
          className="max-w-[110px] h-10 w-full font-medium"
          options={countries.map((country) => ({ value: country.code, label: country.name }))}
          onSelect={setFromCurrency}
        />
        <Select
          value={toCurrency}
          placeholder="USD"
          className="max-w-[110px] h-10 w-full font-medium"
          options={countries.map((country) => ({ value: country.code, label: country.name }))}
          onSelect={setToCurrency}
        />
      </div>
      {fromRate && toRate && (
        <div className="flex flex-row gap-8">
          <p className="headline3 font-medium">{fromRate}</p>
          <button
            type="button"
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
          >
            <Icon variant="changeRateIcon" />
          </button>
          <p className="headline3 font-medium">{toRate}</p>
        </div>
      )}
    </div>
  );
};

export default RateChange;
