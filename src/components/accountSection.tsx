'use client';

import AccountCard from './accountCard';
import { useAppSelector } from '@/store/hooks';

const AccountSection = () => {
  const accounts = useAppSelector((state) =>
    state.user.products.filter((product) => product.type === 'Account'),
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="headline2 font-semibold text-label">Cuentas</h2>
      <div className="flex gap-6 flex-wrap">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            id={account.id}
            alias={account.alias}
            currency={account.currency}
            balance={account.balance}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountSection;
