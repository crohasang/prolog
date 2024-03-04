import useStore from '../../store/useStore';
import RedBtn from './RedBtn';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const navigate = useNavigate();
  const logOut = useStore((state) => state.logOut);

  const handleLogoutClick = () => {
    // 로그아웃
    logOut();

    // 인트로 화면으로 이동
    navigate('/');
  };
  return (
    <div className="whitespace-nowrap">
      <RedBtn title="로그아웃" onClick={handleLogoutClick} />
    </div>
  );
};

export default LogoutBtn;
