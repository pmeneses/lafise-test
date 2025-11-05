import React from 'react';
import { Input as BaseInput } from './ui/input';
import { cn } from '@/util/clsx';

type Props = {
  label?: string;
  error?: string;
};

const Input = ({ label, className, error, ...rest }: Props & React.ComponentProps<'input'>) => {
  return (
    <div className="flex flex-col flex-1 gap-2 relative">
      {label && (
        <p className="caption2 font-bold text-[#3B8668] absolute -top-2 left-6 bg-background">
          {label}
        </p>
      )}
      <BaseInput className={cn('font-poppins', className)} {...rest} />
      {error && <p className="caption2 text-destructive">{error}</p>}
    </div>
  );
};

export default Input;
