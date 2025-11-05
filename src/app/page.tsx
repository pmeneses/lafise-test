'use client';

import AccountSection from '@/components/accountSection';
import CardSection from '@/components/cardSection';
import PageWrapper from '@/components/pageWrapper';
import RecentTransactions from '@/components/recentTransactions';

export default function Home() {
  return (
    <PageWrapper className="p-6 flex-col gap-10">
      <CardSection />
      <AccountSection />
      <RecentTransactions />
    </PageWrapper>
  );
}
