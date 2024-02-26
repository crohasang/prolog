import { useNavigate } from 'react-router-dom';

import Logo from '../atoms/Logo';
import HeaderBtn from '../atoms/HeaderBtn';
import SearchBar from '../molecules/SearchBar';
import HeaderNickName from '../atoms/HeaderNickName';

const BoardHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-16 bg-transparent flex justify-between items-center px-4 fixed top-0">
      <div className="flex justify-between gap-x-10">
        <Logo />
        <HeaderBtn title="HOT" onClick={() => navigate('/board/hot')} />
        <HeaderBtn title="자유" onClick={() => navigate('/board/free')} />
      </div>

      <div className="w-1/3 mr-10">
        <SearchBar />
      </div>

      <div className="flex items-center gap-x-4">
        <HeaderNickName title="닉네임" onClick={() => navigate('/my')} />
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden "></div>
      </div>
    </header>
  );
};

export default BoardHeader;
