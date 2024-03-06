import React from 'react';
// import { useParams } from 'react-router-dom';
// import { cardData } from '../store/data/card';
// import { CardResult } from '../store/type/card/card';
import BoardHeader from '../components/organisms/BoardHeader';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';
import CommentWrite from '../components/organisms/CommentWrite';
import CommentSection from '../components/organisms/CommentSection';
import { useQuery } from '@tanstack/react-query';
import { fetchDetailData } from '../apis/detail/fetchDetailData';
import Loading from './Loading';

const Content: React.FC = () => {
  // fetchDetailData
  const {
    data: DetailData,
    isLoading: isDetailDataLoading,
    // isError: isDetailDataError,
  } = useQuery({
    queryKey: ['fetchDetailData'],
    queryFn: () => fetchDetailData(),
  });

  // 로딩 중일 때
  if (isDetailDataLoading) {
    return <Loading />;
  }

  return DetailData !== undefined ? (
    <div className="font-pretendard min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col px-8 mb-10">
      <BoardHeader />
      <div className=" text-black sm:mx-32 mt-20">
        <div className="text-2xl font-bold dark:text-white mt-4">
          {DetailData.result.title}
        </div>
        <div className="text-sm text-gray-400 dark:text-white mt-4">
          {DetailData.result.author} | {DetailData.result.time}
        </div>
        <div className="h-auto bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg mt-10 p-4 ">
          {DetailData?.result.body}
        </div>
      </div>
      <CommentSection CommentResult={DetailData.result.comments} />
      <CommentWrite />
      <DarkModeToggle />
      <TopButton />
    </div>
  ) : (
    <div>오류!</div>
  );
};

export default Content;
