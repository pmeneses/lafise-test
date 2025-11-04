import { cn } from '@/util/clsx';

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('flex px-10', className)}>{children}</div>;
};

export default PageWrapper;
