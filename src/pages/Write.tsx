import React, { useState } from 'react';
import BoardHeader from '../components/organisms/BoardHeader';
import SubmitBtn from '../components/atoms/SubmitBtn';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';

import { ReactComponent as PictureIcon } from '../assets/icons/picture.svg';

import useStore from '../store/useStore';

const Write = () => {
  // 다크모드
  const darkMode = useStore((state) => state.darkMode);

  // 제목
  const [newTitle, setNewTitle] = useState<string>('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  // 본문
  const [newWriting, setNewWriting] = useState<string>('');

  const handleWritingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewWriting(e.target.value);
  };

  // 제출
  const handleWritingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('New comment:', newWriting);
  };

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col px-8">
      <BoardHeader />
      <div className="font-pretendard sm:mx-32 mt-10">
        <form onSubmit={handleWritingSubmit} className="mt-4">
          <h2 className="text-xl font-semibold dark:text-white">제목</h2>
          <input
            value={newTitle}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded-md h-10 mt-4"
          />

          <div className="flex mt-8">
            <h2 className="text-xl font-semibold dark:text-white">본문</h2>
            <button className="bg-transparent ml-4">
              <PictureIcon
                width={30}
                height={30}
                stroke={darkMode ? 'white' : 'black'}
              />
            </button>
          </div>

          <textarea
            value={newWriting}
            onChange={handleWritingChange}
            className="w-full p-2 border rounded-md min-h-72 mt-4"
          />
          <SubmitBtn />
        </form>
      </div>
      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default Write;
