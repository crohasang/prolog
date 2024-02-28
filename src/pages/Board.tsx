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
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mx-28 items-center justify-items-center">
          {cardData &&
            cardData.map((value: CardResult, index: number) => (
              <BoardCard
                key={index}
                title={value.title}
                body={value.body}
                time={value.time}
                commentNum={value.commentNum}
                author={value.author}
                likes={value.likes}
                onClick={() => navigate(`/content/${value.id}`)}
              />
            ))}
        </div>
      </div>

      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default Board;
