import RedBtn from './RedBtn';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // 로컬스토리지에서 토큰 제거
    localStorage.removeItem('accessToken');

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
