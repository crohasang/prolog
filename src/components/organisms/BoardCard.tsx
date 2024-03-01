import React from 'react';

interface Props {
  title: string;
  time: string;
  commentNum: number;
  author: string;
  likes: number;
  onClick: () => void;
}

const BoardCard: React.FC<Props> = ({
  title,
  time,
  commentNum,
  author,
  likes,
  onClick,
}) => {
  return (
    <div
      className="font-pretendard w-1/3 h-auto bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white border-b-2
    overflow-hidden p-4 flex flex-col justify-between cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <div>
        <h2 className="font-bold text-lg">
          {title} [{commentNum}]
        </h2>
      </div>
      <div>
        <p className="text-left">{time}</p>
        <div className="flex justify-between items-center mt-2">
          <p>{author}</p>
          <p>❤️ {likes}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
