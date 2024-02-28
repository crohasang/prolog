import { useNavigate } from 'react-router-dom';
import BoardHeader from '../components/organisms/BoardHeader';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import TopButton from '../components/atoms/TopButton';
import { cardData } from '../store/data/card';
import { CardResult } from '../store/type/card/card';
import BoardCard from '../components/organisms/BoardCard';

const My = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col px-8">
      <BoardHeader />
      <div className="font-pretendard sm:mx-32 mb-10">
        <h2 className="text-xl font-semibold dark:text-white mt-8">프로필</h2>
        <div className="flex items-center mt-12">
          <div className="w-24 h-24 bg-gray-300 rounded-full mr-12" />
          <h2 className="text-xl font-semibold dark:text-white">닉네임</h2>
          <button className="bg-transparent dark:text-gray-50 ml-4">
            닉네임 변경하기
          </button>
        </div>

        <h2 className="text-xl font-semibold dark:text-white mt-20">
          내가 쓴 글
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mx-28 items-center justify-items-center">
        {cardData &&
          cardData.map((value: CardResult, index: number) => (
            <BoardCard
              key={index}
              title={value.title}
              body={value.body}
              time={value.time}
              commentNum={value.commentNum}
              author={value.author}
              likes={value.likes}
              onClick={() => navigate(`/content/${value.id}`)}
            />
          ))}
      </div>

      <DarkModeToggle />
      <TopButton />
    </div>
  );
};

export default My;
