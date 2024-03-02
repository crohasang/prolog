import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MagnifyingGlassIcon } from '../../assets/icons/magnifyingGlass.svg';

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchWord}`);
  };

  return (
    <div className="flex items-center bg-gray-200 rounded-full p-2 w-full">
      <div className="flex-shrink-0">
        <MagnifyingGlassIcon width={16} height={16} stroke="black" />
      </div>
      <input
        className="ml-2 bg-transparent outline-none text-black placeholder-gray-500 flex-grow"
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;
