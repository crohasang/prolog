import React, { useState } from 'react';

interface Props {
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}
const BoardFilter: React.FC<Props> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('최신순');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div className="my-2">
      <label
        htmlFor="filter"
        className="font-pretendard-medium block text-sm text-black dark:text-white "
      ></label>

      <select
        id="filter"
        name="filter"
        className="font-pretendard mt-1 block w-full py-2 px-3  bg-white dark:bg-black text-black dark:text-white  shadow-sm focus:outline-none"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option>최신순</option>
        <option>추천순</option>
        <option>댓글순</option>
      </select>
    </div>
  );
};

export default BoardFilter;
