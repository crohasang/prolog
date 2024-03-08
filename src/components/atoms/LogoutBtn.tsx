import { useMutation } from '@tanstack/react-query';
import useStore from '../../store/useStore';
import RedBtn from './RedBtn';
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/instance';

const LogoutBtn = () => {
  const navigate = useNavigate();
  const logOut = useStore((state) => state.logOut);

  // 본문 좋아요일 때
  const logoutMutation = useMutation({
    mutationFn: () => {
      return instance.post('');
    },
  });

  const handleLogoutClick = () => {
    // 로그아웃
    logOut();

    // POST 보내기
    logoutMutation.mutate();

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
