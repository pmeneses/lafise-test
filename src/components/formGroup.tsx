import { cn } from '@/util/clsx';

const FormGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('flex flex-col flex-1 py-3 px-4 md:px-8', className)}>
      <div className="flex flex-1 flex-wrap items-center gap-10 w-full md:w-[80%] self-center">
        {children}
      </div>
    </div>
  );
};

export default FormGroup;
