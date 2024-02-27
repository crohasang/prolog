import { useNavigate } from 'react-router-dom';

import IntroLogo from '../atoms/Intro/IntroLogo';
import IntroHeaderBtn from '../atoms/Intro/IntroHeaderBtn';

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
        <IntroLogo />
      </div>
      <div className="">
        <IntroHeaderBtn title="둘러보기" onClick={() => navigate('/board')} />
      </div>
    </header>
  );
};

export default IntroHeader;
