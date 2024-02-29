import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import { useNavigate } from 'react-router-dom';

const EmailRegisterBtn: React.FC = () => {
  const opacity = useFadeIn(0, 1, 1000);
  const navigate = useNavigate();

  return (
    <button
      className="font-pretendard font-semibold w-48 h-10 bg-slate-200 text-black cursor-pointer rounded-md transition-opacity duration-1000"
      style={{ opacity }}
      onClick={() => navigate('/register')}
    >
      이메일로 회원가입
    </button>
  );
};

export default EmailRegisterBtn;
