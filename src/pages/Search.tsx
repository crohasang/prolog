import { useParams } from 'react-router-dom';
import BoardHeader from '../components/organisms/BoardHeader';

const Search = () => {
  const { searchWord } = useParams();
  return (
    <div className="min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col px-8 ">
      <BoardHeader />
      <div className="font-pretendard sm:mx-32 mt-20">
        <div className="text-2xl font-bold dark:text-white mt-4">
          '{searchWord}' 검색 결과
        </div>
      </div>
    </div>
  );
};

export default Search;
