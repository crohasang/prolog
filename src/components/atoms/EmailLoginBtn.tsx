import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import { useNavigate } from 'react-router-dom';

const EmailLoginBtn: React.FC = () => {
  const opacity = useFadeIn(0, 1, 1000);
  const navigate = useNavigate();

  return (
    <button
      className="font-pretendard font-semibold w-48 h-10 bg-white text-black cursor-pointer rounded-md transition-opacity duration-1000"
      style={{ opacity }}
      onClick={() => navigate('/login')}
    >
      이메일로 로그인
    </button>
  );
};

export default EmailLoginBtn;
