import React from 'react';
import BoardHeader from '../components/organisms/BoardHeader';
import BoardIntroduce from '../components/organisms/BoardIntroduce';
import BoardFilterLine from '../components/organisms/BoardFilterLine';
import BoardCard from '../components/organisms/BoardCard';
import { CardResult } from '../store/type/card/card';

// api에서 받아오지 않고 netlify에 보이게 하기 위해 생성한 임시 데이터
import { cardData } from '../store/data/card';

// import { fetchCardData } from '../apis/card/fetchCardData';
// import { useQuery } from '@tanstack/react-query';

const Board = () => {
  // fetchCardData
  // const {
  //   data: CardGetData,
  //   // isLoading: CardGetDataLoading,
  //   // isError: CardGetDataError,
  // } = useQuery({
  //   queryKey: ['CardGetData'],
  //   queryFn: () => fetchCardData(),
  // });

  return (
    <div className="h-screen w-screen bg-white dark:bg-black flex flex-col mt-2 flex-shrink-0">
      <BoardHeader />
      <div className="w-full h-1/3 mt-3 flex-shrink-0">
        <BoardIntroduce />
      </div>
      <div>
        <BoardFilterLine />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mx-20 items-center justify-items-center">
        {/* {CardGetData &&
          CardGetData.map((value: CardResult, index: number) => (
            <BoardCard
              key={index}
              title={value.title}
              body={value.body}
              time={value.time}
              commentNum={value.commentNum}
              author={value.author}
              likes={value.likes}
            />
          ))} */}
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
            />
          ))}
      </div>
    </div>
  );
};

export default Board;
