import WriteBtn from '../molecules/WriteBtn';
import BoardFilter from '../molecules/BoardFilter';

const BoardFilterLine = () => {
  const isLoggedIn = !!localStorage.getItem('accessToken');

  return (
    <div className="flex justify-between sm:mx-32">
      {isLoggedIn ? <WriteBtn /> : <div />}
      <BoardFilter />
    </div>
  );
};

export default BoardFilterLine;
