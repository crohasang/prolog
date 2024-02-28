import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <button
      className="font-pretendard bg-transparent text-black dark:text-white font-bold focus:outline-none text-sm"
      onClick={() => navigate('/board')}
    >
      PROlog
    </button>
  );
};

export default Logo;
