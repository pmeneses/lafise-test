import { useAppSelector } from '@/store/hooks';
import Table from './table';
import { formatDate } from '@/util/date';
import { formatCurrency } from '@/util/currency';
import { useMemo } from 'react';

const RecentTransactions = () => {
  const transactions = useAppSelector((state) => state.transaction ?? []);
  const recentTransactions = useMemo(() => {
    return transactions
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [transactions]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="headline2 font-bold">Transacciones recientes</h2>
      <Table
        columns={[
          { label: 'Fecha' },
          { label: 'Descripción' },
          { label: 'Débito USD' },
          { label: 'Balance USD' },
        ]}
        data={recentTransactions.map((trx) => ({
          date: { value: formatDate(trx.date) },
          description: { value: trx.description },
          debit: { value: formatCurrency(trx.amount) },
          balance: {
            value: formatCurrency(trx.balance),
          },
        }))}
      />
    </div>
  );
};

export default RecentTransactions;
