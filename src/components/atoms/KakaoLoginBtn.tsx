import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import loginBtnImage from '../../assets/icons/kakao_login_medium_wide.png';

const KakaoLoginBtn = () => {
  const opacity = useFadeIn(0, 1, 1000);

  const handleLoginClick = () => {
    // 클릭 시 수행할 작업을 여기에 작성합니다.
    console.log('Kakao Login Button clicked!');
  };

  return (
    <img
      src={loginBtnImage}
      alt="Kakao Login Button"
      className="cursor-pointer transition-opacity duration-1000"
      style={{ opacity }}
      onClick={handleLoginClick}
    />
  );
};

export default KakaoLoginBtn;
