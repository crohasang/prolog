import React from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../store/data/card';
import { CardResult } from '../store/type/card/card';
import BoardHeader from '../components/organisms/BoardHeader';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';
import CommentWrite from '../components/organisms/CommentWrite';

const Content: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  let content: CardResult | undefined;

  if (id !== undefined) {
    content = cardData.find((card) => card.id === parseInt(id, 10));
  }

  if (!content) {
    return <div>잘못된 주소!!</div>;
  }

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col ">
      <BoardHeader />
      <div className="font-pretendard pl-4 sm:mx-32 mt-20">
        <div className="text-2xl font-bold dark:text-white mt-4">
          {content.title}
        </div>
        <div className="text-sm text-gray-400 dark:text-white mt-4">
          {content.author} | {content.time}
        </div>
        <div className="h-auto bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg mt-10 p-4 ">
          {content.body}
        </div>
      </div>
      {/* 댓글 표시될 곳 */}
      <CommentWrite />
      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default Content;
