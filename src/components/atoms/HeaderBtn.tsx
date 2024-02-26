import React from 'react';

interface Props {
  title: string;
}

const HeaderBtn: React.FC<Props> = ({ title }) => {
  return (
    <button className="font-pretendard bg-transparent text-white text-xl pb-1 ">
      {title}
    </button>
  );
};

export default HeaderBtn;
