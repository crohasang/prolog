import { ReactComponent as MagnifyingGlassIcon } from '../../assets/icons/magnifyingGlass.svg';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200 rounded-full p-2 w-full">
      <MagnifyingGlassIcon width={16} height={16} />
      <input
        className="ml-2 bg-transparent outline-none placeholder-gray-500 flex-grow"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
