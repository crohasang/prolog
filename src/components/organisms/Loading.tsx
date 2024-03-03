import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const Loading = () => {
  const navigate = useNavigate();

  // 게시판 페이지로 이동
  const handleBoard = () => {
    navigate('/board');
    window.location.reload();
  };

  // 현재 url에서 code 추출
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  // code 백엔드로 보내기 토큰 받기
  const loginMutation = useMutation({
    mutationFn: async (code: string) => {
      // 명세서보고 url 수정할 것
      const response = await axios.post('url', { code });

      return response.data;
    },

    onSuccess: (res) => {
      // 백엔드와 소통해서 res.data.accessToken이 맞는지 확인 할 것
      const accessToken = res.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      handleBoard();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (code) {
      loginMutation.mutate(code);
    } else {
      console.log('로그인 재시도하세요.');
    }
  }, [code]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-4">
      <div className="font-pretendard font-bold text-black ">
        잠시만 기다려주세요
      </div>
      <PacmanLoader />
    </div>
  );
};

export default Loading;
