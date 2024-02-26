import { useNavigate } from 'react-router-dom';

import Logo from '../atoms/Logo';
import HeaderBtn from '../atoms/HeaderBtn';
import SearchBar from '../molecules/SearchBar';
const BoardHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-16 bg-black flex items-center justify-between px-4 fixed top-0">
      <Logo />
      <HeaderBtn title="HOT" onClick={() => navigate('/board/hot')} />
      <SearchBar />
    </header>
  );
};

export default BoardHeader;
