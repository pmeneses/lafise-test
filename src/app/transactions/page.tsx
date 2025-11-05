'use client';

import PageWrapper from '@/components/pageWrapper';
import Table from '@/components/table';
import TransactionTabs from '@/components/transactionTabs';
import { useAppSelector } from '@/store/hooks';
import { cn } from '@/util/clsx';
import { formatCurrency } from '@/util/currency';
import { formatDate } from '@/util/date';

export default function Transfer() {
  const transactions = useAppSelector((state) => state.transaction);
  return (
    <PageWrapper className="p-3 md:p-10 flex-col min-h-[800px]">
      <div className="flex flex-col gap-6">
        <h2 className="headline2 font-bold">Mis Transacciones</h2>
        <TransactionTabs />
      </div>
      <Table
        columns={[
          { label: 'Fecha' },
          { label: 'Descripción' },
          { label: 'Débito USD' },
          { label: 'Balance USD' },
        ]}
        data={transactions.map((trx) => ({
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
