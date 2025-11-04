'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Icon from './icon';
import { appSlice } from '@/store/app';
import SearchInput from './searchInput';
import Image from 'next/image';

const Header = () => {
  const dispatch = useAppDispatch();
  const sideBarOpen = useAppSelector((state) => state.app.sidebarOpen);
  const profilePhoto = useAppSelector((state) => state.user.profilePhoto);

  return (
    <header className="w-full h-16 bg-white shadow-[0px_2px_15px_0px_#68686812] flex items-center justify-between px-6">
      <button
        className="hidden md:inline"
        onClick={() => dispatch(appSlice.actions.switchSidebar(!sideBarOpen))}
      >
        <Icon variant="menuIcon" size={24} />
      </button>
      <div className="flex gap-6">
        <Icon variant="notifyIcon" size={24} />
        <SearchInput className="w-[300px]" />
        {profilePhoto && (
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
