'use client';

import PageWrapper from '@/components/pageWrapper';
import Table from '@/components/table';
import TransactionTabs from '@/components/transactionTabs';
import { useAppSelector } from '@/store/hooks';
import { formatCurrency } from '@/util/currency';
import { formatDate } from '@/util/date';
import React from 'react';

export default function Transfer() {
  const transactions = useAppSelector((state) => state.transaction);
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const memorizedTransactions = React.useMemo(() => {
    const start = dateRange.from ? new Date(dateRange.from).setHours(0, 0, 0, 0) : undefined;
    const end = dateRange.to ? new Date(dateRange.to).setHours(0, 0, 0, 0) : undefined;

    if (!start || !end) return transactions;

    return transactions.filter((trx) => {
      const trxTime = new Date(trx.date).setHours(0, 0, 0, 0);
      return trxTime >= start && trxTime <= end;
    });
  }, [transactions, dateRange.from, dateRange.to]);

  return (
    <PageWrapper className="p-3 md:p-10 flex-col min-h-[800px]">
      <div className="flex flex-col gap-6">
        <h2 className="headline2 font-bold">Mis Transacciones</h2>
        <TransactionTabs />
      </div>
      <Table
        filterDateRange
        onChangeDateRange={(from, to) => setDateRange({ from, to })}
        columns={[
          { label: 'Fecha' },
          { label: 'Descripción' },
          { label: 'Débito USD' },
          { label: 'Balance USD' },
        ]}
        data={memorizedTransactions.map((trx) => ({
          date: { value: formatDate(trx.date) },
          description: { value: trx.description },
          debit: { value: formatCurrency(trx.amount) },
          balance: {
            value: formatCurrency(trx.balance),
          },
        }))}
      />
    </PageWrapper>
  );
}
