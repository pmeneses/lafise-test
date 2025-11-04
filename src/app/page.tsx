import AccountSection from '@/components/accountSection';
import PageWrapper from '@/components/pageWrapper';

export default function Home() {
  return (
    <PageWrapper className="p-10 flex-col">
      <AccountSection />
    </PageWrapper>
  );
}
