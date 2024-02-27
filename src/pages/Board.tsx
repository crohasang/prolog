import BoardHeader from '../components/organisms/BoardHeader';
import BoardIntroduce from '../components/organisms/BoardIntroduce';
import BoardFilterLine from '../components/organisms/BoardFilterLine';

const Board = () => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-black flex flex-col">
      <BoardHeader />
      <div className="w-full h-28 mt-1">
        <BoardIntroduce />
      </div>
      <div>
        <BoardFilterLine />
      </div>
    </div>
  );
};

export default Board;
