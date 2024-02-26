import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';

const IntroTitle = () => {
  const opacity = useFadeIn(0, 1, 1000);

  return (
    <div
      className="font-pretendard bg-transparent text-white font-bold focus:outline-none text-6xl transition-opacity duration-1000"
      style={{ opacity }}
    >
      우리들의 이야기, PROlog
    </div>
  );
};

export default IntroTitle;
