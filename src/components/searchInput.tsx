'use client';

import * as React from 'react';
import { cn } from '@/util/clsx';
import Icon from './icon';
import { Input } from './ui/input';

type SearchInputProps = React.ComponentProps<typeof Input> & {
  compact?: boolean;
};

const SearchInput: React.FC<SearchInputProps> = ({ className, compact = false, ...props }) => {
  return (
    <div className={cn('relative flex items-center w-full', className)}>
      <div className="absolute left-2 pointer-events-none flex items-center justify-center">
        <Icon variant="searchIcon" size={18} svgClassName="text-muted-foreground" />
      </div>

      <Input
        {...props}
        className={cn(
          compact ? 'pl-8 py-0 h-8' : 'pl-9 h-10',
          'w-full',
          'caption1 font-medium text-label',
          className,
        )}
        aria-label={props['aria-label'] ?? 'Buscar'}
        placeholder={props.placeholder ?? 'Buscar'}
      />
    </div>
  );
};

export default SearchInput;
