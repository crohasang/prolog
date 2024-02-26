import React from 'react';

import Logo from '../atoms/Logo';
import HeaderBtn from '../atoms/HeaderBtn';

import { useFadeIn } from '../../hooks/useFadeIn';

const Header = () => {
  const opacity = useFadeIn(0, 1, 1000);

  return (
    <header
      className="w-full h-16 bg-transparent flex items-center px-4 fixed top-0 transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div className="mr-5">
        <Logo />
      </div>
      <div className="space-x-4">
        <HeaderBtn title="게시판1" />
        <HeaderBtn title="게시판2" />
      </div>
    </header>
  );
};

export default Header;
