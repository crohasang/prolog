import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <button
      className="font-pretendard bg-transparent text-black font-bold focus:outline-none"
      onClick={() => navigate('/')}
    >
      PROlog
    </button>
  );
};

export default Logo;
