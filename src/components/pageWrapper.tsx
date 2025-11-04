import { cn } from '@/util/clsx';

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('flex px-6', className)}>{children}</div>;
};

export default PageWrapper;
