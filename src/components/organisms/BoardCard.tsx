import React from 'react';

interface Props {
  title: string;
  body: string;
  time: string;
  commentNum: number;
  author: string;
  likes: number;
  onClick: () => void;
}

const BoardCard: React.FC<Props> = ({
  title,
  body,
  time,
  commentNum,
  author,
  likes,
  onClick,
}) => {
  return (
    <div
      className="font-pretendard w-72 h-72 rounded-lg bg-white  dark:bg-zinc-700 text-zinc-700 dark:text-white border-2
    overflow-hidden p-4 flex flex-col justify-between transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
      onClick={onClick}
    >
      <div>
        <h2 className="font-bold text-xl line-clamp-1">{title}</h2>
        <p className="text-sm line-clamp-3">{body}</p>
      </div>
      <div>
        <p className="text-left">
          {time} , {commentNum}개의 댓글
        </p>
        <div className="flex justify-between items-center mt-2">
          <p>{author}</p>
          <p>👍 {likes}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
