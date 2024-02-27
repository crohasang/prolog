import React from 'react';

interface Props {
  title: string;
  body: string;
  time: string;
  commentNum: number;
  author: string;
  likes: number;
}

const Card: React.FC<Props> = ({
  title,
  body,
  time,
  commentNum,
  author,
  likes,
}) => {
  return (
    <div className="font-pretendard w-80 h-96 bg-white shadow-md overflow-hidden p-4 flex flex-col justify-between">
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

export default Card;
