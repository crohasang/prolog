import BoardHeader from '../components/organisms/BoardHeader';

const Board = () => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-black flex flex-col justify-center items-center">
      <BoardHeader />
    </div>
  );
};

export default Board;
