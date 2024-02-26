import { useNavigate } from 'react-router-dom';

import Logo from '../atoms/Logo';
import HeaderBtn from '../atoms/HeaderBtn';

import { useFadeIn } from '../../hooks/useFadeIn';

const IntroHeader = () => {
  const navigate = useNavigate();
  const opacity = useFadeIn(0, 1, 1000);

  return (
    <header
      className="w-full h-16 bg-transparent flex items-center justify-between px-4 fixed top-0 transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div className="mr-5">
        <Logo />
      </div>
      <div className="">
        <HeaderBtn title="둘러보기" onClick={() => navigate('/board')} />
      </div>
    </header>
  );
};

export default IntroHeader;
