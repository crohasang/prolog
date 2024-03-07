import React from 'react';
import { useNavigate } from 'react-router-dom';

import BoardHeader from '../components/organisms/BoardHeader';
import BoardIntroduce from '../components/organisms/BoardIntroduce';
import BoardFilterLine from '../components/organisms/BoardFilterLine';
import BoardCard from '../components/organisms/BoardCard';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import { CardResult } from '../store/type/card/card';

// api에서 받아오지 않고 netlify에 보이게 하기 위해 생성한 임시 데이터
import { cardData } from '../store/data/card';
import TopButton from '../components/atoms/TopButton';

const Board = () => {
  const navigate = useNavigate();
  return (
    <div className="font-pretendard min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col">
      <div className="px-8">
        <BoardHeader />
      </div>
      <div className="h-64 mt-3 flex-shrink-0">
        <BoardIntroduce />
      </div>
      <div className="px-8">
        <div>
          <BoardFilterLine />
        </div>
        <hr className="border-gray-300 dark:border-white" />
        <div className="flex flex-col items-center gap-y-5">
          {cardData && cardData.length > 0 ? (
            cardData.map((value: CardResult, index: number) => (
              <BoardCard
                key={index}
                title={value.title}
                time={value.time}
                commentNum={value.commentNum}
                author={value.author}
                likes={value.likes}
                onClick={() => navigate(`/content/${value.id}`)}
              />
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <div>아직 댓글이 없습니다.</div>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="mx-1 px-3 py-1 border-r-1 bg-transparent text-zinc-700 dark:text-white">
            1
          </button>
          <button className="mx-1 px-3 py-1 border-r-1  bg-transparent text-zinc-700 dark:text-white">
            2
          </button>
          <button className="mx-1 px-3 py-1 border-r-1  bg-transparent text-zinc-700 dark:text-white">
            3
          </button>
        </div>
      </div>

      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default Board;
