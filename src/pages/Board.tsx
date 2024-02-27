import BoardHeader from '../components/organisms/BoardHeader';
import BoardIntroduce from '../components/organisms/BoardIntroduce';

const Board = () => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-black flex flex-col">
      <BoardHeader />
      <div className="w-full h-28 mt-1">
        <BoardIntroduce />
      </div>
      <div></div>
    </div>
  );
};

export default Board;
