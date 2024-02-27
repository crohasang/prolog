import React from 'react';
import BoardIntroduceImage from '../../assets/images/boardIntroduceImage.jpg'; // 이미지 경로

const BoardIntroduce = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center text-white dark:text-black"
      style={{ backgroundImage: `url(${BoardIntroduceImage})` }}
    >
      <p className="text-2xl font-bold">여러분들의 이야기를 들려주세요</p>
    </div>
  );
};

export default BoardIntroduce;
