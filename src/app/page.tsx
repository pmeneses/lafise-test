"use client";

import AccountSection from '@/components/accountSection';
import PageWrapper from '@/components/pageWrapper';
import RecentTransactions from '@/components/recentTransactions';

export default function Home() {
  return (
    <PageWrapper className="p-10 flex-col gap-10">
      <AccountSection />
      <RecentTransactions />
    </PageWrapper>
  );
}
