import { useNavigate } from 'react-router-dom';
import { CardResponse, CardResult } from '../../store/type/card/card';
import BoardCard from './BoardCard';

interface Props {
  CardData: CardResponse;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const CardArea: React.FC<Props> = ({ CardData, page, setPage }) => {
  const navigate = useNavigate();

  // 페이지 버튼 생성
  const pageButtons = [];

  if (CardData !== undefined) {
    for (let i = 1; i <= CardData.totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          className="mx-1 px-3 py-1 border-r-1 bg-transparent text-zinc-700 dark:text-white"
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }
  }
  return (
    <>
      <div className="flex flex-col items-center gap-y-5">
        {CardData && CardData.result.length > 0 ? (
          CardData.result.map((value: CardResult, index: number) => (
            <BoardCard
              key={index}
              title={value.title}
              time={value.time}
              commentNum={value.commentNum}
              author={value.author}
              likes={value.likes}
              onClick={() => navigate(`/content/${value.id}`)}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <div>아직 글이 없습니다.</div>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center">{pageButtons}</div>
    </>
  );
};

export default CardArea;
