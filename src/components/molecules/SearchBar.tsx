import { ReactComponent as MagnifyingGlassIcon } from '../../assets/icons/magnifyingGlass.svg';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-full p-2 w-full">
      <div className="flex-shrink-0">
        <MagnifyingGlassIcon width={16} height={16} />
      </div>
      <input
        className="ml-2 bg-transparent outline-none placeholder-gray-500 flex-grow"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
