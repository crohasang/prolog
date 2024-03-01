import React from 'react';
import MyIntroduceImage from '../../assets/images/myIntroduceImage.jpg';

const MyIntroduce = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center text-white dark:text-zinc-300"
      style={{ backgroundImage: `url(${MyIntroduceImage})` }}
    >
      <div className="text-2xl font-bold">당신만을 위한 공간</div>
    </div>
  );
};

export default MyIntroduce;
