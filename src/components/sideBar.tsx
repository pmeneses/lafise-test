'use client';

import menuOptions from '@/data/menuOptions';
import React, { useEffect } from 'react';
import { cn } from '@/util/clsx';
import RateChange from './rateChange';
import Icon from './icon';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';

const SideBard = () => {
  const router = useRouter();
  const path = usePathname();
  const [selected, setSelected] = React.useState(0);
  const sideBarOpen = useAppSelector((state) => state.app.sidebarOpen);

  const collapsed = sideBarOpen === false;

  useEffect(() => {
    const foundIndex = menuOptions.findIndex((option) => option.route === path);
    if (foundIndex !== -1) {
      setSelected(foundIndex);
    }
  }, [path]);

  return (
    <div
      className={cn(
        'gap-6 flex flex-col border-r-[#F3F5F3] border-r bg-transparent',
        collapsed ? 'w-20' : 'w-20 md:w-72',
      )}
    >
      <div className="flex items-center justify-center px-2 md:px-9 pt-6 pb-2">
        <Icon
          style={collapsed ? 'hidden' : 'hidden md:inline h-10 md:w-[192px] md:h-[63px]'}
          variant="companyLogoIcon"
        />
      </div>
      <div className="flex flex-col gap-6">
        <ul className="mx-4 flex flex-col">
          {menuOptions.map((option, index) => (
            <li
              key={option.label}
              className={cn(
                'p-3 md:p-4 cursor-pointer flex justify-between rounded-sm mb-2 items-center',
                selected === index ? 'bg-sidebar-active' : '',
              )}
              onClick={() => {
                setSelected(index);
                if (option.route) router.push(option.route);
              }}
            >
              <div className="flex items-center gap-3">
                <Icon
                  variant={option.icon}
                  size={20}
                  svgClassName={cn({ 'fill-active': selected === index })}
                />
                <span
                  className={cn(
                    collapsed ? 'hidden' : 'hidden text-label font-medium caption1 md:inline',
                    { 'text-active': selected === index },
                  )}
                >
                  {option.label}
                </span>
              </div>
              <Icon
                variant="chevronRightIcon"
                size={20}
                svgClassName={cn(collapsed ? 'hidden' : 'hidden md:inline', {
                  'fill-active': selected === index,
                })}
              />
            </li>
          ))}
        </ul>
        <RateChange />
      </div>
    </div>
  );
};

export default SideBard;
