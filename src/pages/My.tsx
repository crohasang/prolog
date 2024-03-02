import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BoardHeader from '../components/organisms/BoardHeader';
import MyIntroduce from '../components/organisms/MyIntroduce';

import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';
import { cardData } from '../store/data/card';
import { CardResult } from '../store/type/card/card';
import BoardCard from '../components/organisms/BoardCard';
import BlueBtn from '../components/atoms/BlueBtn';
import RedBtn from '../components/atoms/RedBtn';

const My = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('타락파워전사');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <div className="font-pretendard min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col">
      <div className="px-8">
        <BoardHeader />
      </div>

      <div className="h-64 mt-3 flex-shrink-0">
        <MyIntroduce />
      </div>
      <div className="font-pretendard md:mx-32 mb-10 px-8">
        <div className="flex flex-col gap-y-8 my-20">
          <div className="text-xl font-semibold text-black dark:text-white">
            닉네임
          </div>
          <div className="flex items-center gap-x-4">
            {isEditing ? (
              <input
                type="text"
                value={nickname}
                onChange={handleNicknameChange}
                className="text-lg rounded-lg border-2"
              />
            ) : (
              <div className="text-lg text-black dark:text-white ">
                {nickname}
              </div>
            )}
            <div className="mr-4">
              <BlueBtn title="변경" onClick={handleEditClick} />
            </div>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-white mt-4" />
        <div className="text-xl font-semibold text-black dark:text-white mt-10">
          내가 쓴 글
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-5">
        {cardData &&
          cardData.map((value: CardResult, index: number) => (
            <BoardCard
              key={index}
              title={value.title}
              time={value.time}
              commentNum={value.commentNum}
              author={value.author}
              likes={value.likes}
              onClick={() => navigate(`/content/${value.id}`)}
            />
          ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button className="mx-1 px-3 py-1 border-r-1 bg-transparent text-zinc-700 dark:text-white">
          1
        </button>
        <button className="mx-1 px-3 py-1 border-r-1  bg-transparent text-zinc-700 dark:text-white">
          2
        </button>
        <button className="mx-1 px-3 py-1 border-r-1  bg-transparent text-zinc-700 dark:text-white">
          3
        </button>
      </div>
      <div className="font-pretendard md:mx-32 mt-20 mb-20 px-8">
        <div className="float-right">
          <RedBtn title="탈퇴하기" />
        </div>
      </div>

      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default My;
