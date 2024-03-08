import { useParams } from 'react-router-dom';
import BoardHeader from '../components/organisms/BoardHeader';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';
import { fetchSearchData } from './../apis/search/fetchSearchData';
import Loading from './Loading';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import CardArea from '../components/organisms/CardArea';
const Search = () => {
  const { searchWord } = useParams();

  // 현재 페이지
  const [page, setPage] = useState<number>(1);

  // fetchSearchData
  const { data: searchData, isLoading: isSearchDataLoading } = useQuery({
    queryKey: ['fetchSearchData', page],
    queryFn: () => fetchSearchData(page),
  });

  if (isSearchDataLoading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col px-8 ">
      <BoardHeader />
      <div className="font-pretendard sm:mx-32 mt-20">
        <div className="text-2xl font-bold text-black dark:text-white mt-4">
          '{searchWord}' 검색 결과
        </div>
        {searchData !== undefined && (
          <CardArea CardData={searchData} page={page} setPage={setPage} />
        )}
      </div>
      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default Search;
