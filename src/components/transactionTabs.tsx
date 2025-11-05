'use client';

import { cn } from '@/util/clsx';

const transactionViews = ['Movimientos', 'Estado', 'Detalle', 'Fondo no Disponible'];

const TransactionTabs = () => {
  return (
    <div className="flex flex-wrap">
      {transactionViews.map((view, index) => (
        <button
          key={view}
          className={cn('mr-4 mb-6 px-4 py-2 rounded-[4px] caption1 font-medium text-[#8D918D]', {
            'bg-[#EDF5F2] text-[#3B8668]': index === 0,
          })}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default TransactionTabs;
