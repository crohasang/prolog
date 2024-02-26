import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

const HeaderNickName: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="font-pretendard bg-transparent text-black dark:text-white text-base pb-1 "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default HeaderNickName;
