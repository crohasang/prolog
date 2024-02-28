import React, { useState } from 'react';
import SubmitBtn from '../atoms/SubmitBtn';

const CommentWrite: React.FC = () => {
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="font-pretendard mt-8 pl-4 sm:mx-32 flex flex-col">
      <h2 className="text-xl font-semibold dark:text-white">댓글</h2>

      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          placeholder="바른 말 고운 말"
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-2 border rounded-md"
        />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default CommentWrite;
