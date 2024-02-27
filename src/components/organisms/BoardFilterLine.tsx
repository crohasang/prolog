import WriteBtn from '../molecules/WriteBtn';
import BoardFilter from '../molecules/BoardFilter';

const BoardFilterLine = () => {
  return (
    <div className="flex justify-between mx-20">
      <WriteBtn />
      <BoardFilter />
    </div>
  );
};

export default BoardFilterLine;
