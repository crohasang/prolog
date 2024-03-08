import React, { useState } from 'react';
import BlueBtn from '../atoms/BlueBtn';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CommentSubmitPostRequestData } from '../../store/type/comment/comment';
import instance from '../../apis/instance';

const CommentWrite: React.FC = () => {
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const queryClient = useQueryClient();

  const commentSubmitMutation = useMutation({
    mutationFn: async (newComment: CommentSubmitPostRequestData) => {
      return await instance.post('', newComment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchDetailData'] }); // 수정이 성공하면 쿼리를 다시 가져옴
    },
  });

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() === '') {
      alert('엥 아무것도 입력 안하셨는데요');
    } else {
      commentSubmitMutation.mutate({ newComment });
      setNewComment('');
    }
  };

  return (
    <div className="font-pretendard mt-8 sm:mx-32 flex flex-col">
      <div className="text-xl font-semibold text-black dark:text-white">
        댓글
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          placeholder="바른 말 고운 말"
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-2 border rounded-md text-black"
        />
        <div className="float-right mt-2">
          <BlueBtn title="제출하기" />
        </div>
      </form>
    </div>
  );
};

export default CommentWrite;
