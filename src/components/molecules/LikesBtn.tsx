import React, { useState } from 'react';
import { ReactComponent as LikesIcon } from '../../assets/icons/likes.svg';
import useStore from '../../store/useStore';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/instance';

interface Props {
  likes: number;
  isContent: boolean;
}

const LikesBtn: React.FC<Props> = ({ likes, isContent }) => {
  // 다크모드
  const darkMode = useStore((state) => state.darkMode);

  const [likeCount, setLikeCount] = useState<number>(likes);

  // 본문 좋아요일 때
  const contentLikesMutation = useMutation({
    mutationFn: (newLikes: number) => {
      return instance.patch('', newLikes);
    },
  });

  const handleContentLikesClick = () => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    contentLikesMutation.mutate(newLikeCount);
  };

  // 댓글 좋아요일 때
  const commentLikesMutation = useMutation({
    mutationFn: (newLikes: number) => {
      return instance.patch('', newLikes);
    },
  });

  const handleCommentLikesClick = () => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    commentLikesMutation.mutate(newLikeCount);
  };

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <LikesIcon
          width={16}
          height={16}
          stroke={darkMode ? 'white' : 'black'}
          onClick={
            isContent ? handleContentLikesClick : handleCommentLikesClick
          }
        />
      </div>

      <div>{likeCount}</div>
    </div>
  );
};

export default LikesBtn;
