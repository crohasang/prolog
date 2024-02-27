import { useNavigate } from 'react-router-dom';

import Logo from '../atoms/Logo';
import SearchBar from '../molecules/SearchBar';
import HeaderNickName from '../atoms/HeaderNickName';
import { ReactComponent as BarIcon } from '../../assets/icons/bars3.svg';
import useStore from '../../store/useStore';

const BoardHeader = () => {
  const navigate = useNavigate();

  // 다크모드
  const darkMode = useStore((state) => state.darkMode);

  return (
    <header className="w-full h-16 bg-transparent flex justify-between items-center px-4 fixed top-0 border-b border-gray">
      <div className="">
        <Logo />
      </div>
      <div className="w-1/3 ml-10">
        <SearchBar />
      </div>

      <div className=" flex items-center gap-x-4 ml-9">
        <div className="hidden sm:flex gap-x-4 items-center">
          <HeaderNickName title="닉네임" />
          <div
            className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden cursor-pointer "
            onClick={() => navigate('/my')}
          />
        </div>

        <div className="ml-5">
          <div className="cursor-pointer">
            <BarIcon
              width={16}
              height={16}
              stroke={darkMode ? 'white' : 'black'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BoardHeader;
