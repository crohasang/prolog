import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

const HeaderBtn: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="font-pretendard bg-transparent text-white text-xl pb-1 "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default HeaderBtn;
