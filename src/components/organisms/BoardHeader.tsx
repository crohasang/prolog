import { useNavigate } from 'react-router-dom';

import Logo from '../atoms/Logo';
import SearchBar from '../molecules/SearchBar';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import useStore from '../../store/useStore';

import LogoutBtn from '../atoms/LogoutBtn';
import BlueBtn from '../atoms/BlueBtn';

const BoardHeader = () => {
  const darkMode = useStore((state) => state.darkMode);
  const navigate = useNavigate();

  // 로그인 여부 확인
  const isLoggedIn = !!localStorage.getItem('accessToken');

  return (
    <header className="h-16 bg-transparent flex justify-between items-center sm:mx-32">
      <div className="">
        <Logo />
      </div>
      <div className="w-1/3 ml-10">
        <SearchBar />
      </div>

      {isLoggedIn ? (
        <div className="flex items-center gap-x-4">
          <LogoutBtn />
          <div className="cursor-pointer " onClick={() => navigate('/my')}>
            <UserIcon
              width={16}
              height={16}
              fill={darkMode ? 'white' : 'black'}
            />
          </div>
        </div>
      ) : (
        <div className="cursor-pointer whitespace-nowrap">
          <BlueBtn title="로그인" onClick={() => navigate('/')} />
        </div>
      )}
    </header>
  );
};

export default BoardHeader;
