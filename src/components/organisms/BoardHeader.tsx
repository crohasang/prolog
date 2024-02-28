import { useNavigate } from 'react-router-dom';

import Logo from '../atoms/Logo';
import SearchBar from '../molecules/SearchBar';
import HeaderNickName from '../atoms/HeaderNickName';

const BoardHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-transparent flex justify-between items-center sm:mx-32">
      <div className="">
        <Logo />
      </div>
      <div className="w-1/3 ml-10">
        <SearchBar />
      </div>

      <div className="flex  items-center gap-x-4">
        <HeaderNickName title="닉네임" />
        <div
          className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden cursor-pointer "
          onClick={() => navigate('/my')}
        />
      </div>
    </header>
  );
};

export default BoardHeader;
