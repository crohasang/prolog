import WriteBtn from '../molecules/WriteBtn';
import BoardFilter from '../molecules/BoardFilter';

interface Props {
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}

const BoardFilterLine: React.FC<Props> = ({ onFilterChange }) => {
  // 로그인 여부 확인
  const isLoggedIn = !!localStorage.getItem('accessToken');

  return (
    <div className="flex justify-between sm:mx-32">
      {isLoggedIn ? <WriteBtn /> : <div />}
      <BoardFilter onFilterChange={onFilterChange} />
    </div>
  );
};

export default BoardFilterLine;
