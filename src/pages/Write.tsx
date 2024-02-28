import React, { useState } from 'react';
import BoardHeader from '../components/organisms/BoardHeader';
import SubmitBtn from '../components/atoms/SubmitBtn';

const Write = () => {
  const [newWriting, setNewWriting] = useState<string>('');

  const handleWritingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewWriting(e.target.value);
  };

  const handleWritingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('New comment:', newWriting);
  };

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col">
      <BoardHeader />
      <div className="font-pretendard pl-4 sm:mx-32 mt-20">
        <h2 className="text-xl font-semibold dark:text-white">글 작성</h2>

        <form onSubmit={handleWritingSubmit} className="mt-4">
          <textarea
            value={newWriting}
            onChange={handleWritingChange}
            className="w-full p-2 border rounded-md h-72 resize-none"
            style={{ textAlign: 'left' }}
          />
          <SubmitBtn />
        </form>
      </div>
    </div>
  );
};

export default Write;
