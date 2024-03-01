import GoogleLoginBtn from '../atoms/GoogleLoginBtn';
import { useFadeIn } from '../../hooks/useFadeIn';
import { useNavigate } from 'react-router-dom';

const LoginArea = () => {
  const navigate = useNavigate();
  const opacity = useFadeIn(0, 1, 1000);
  return (
    <div
      className="font-pretendard flex flex-col items-start space-y-4 bg-gray-200 p-4 rounded transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div className="text-left font-semibold text-black text-xl">로그인</div>
      <input
        className="bg-gray-200 border-b-2  border-gray-500 p-2"
        type="text"
        placeholder="이메일"
      />
      <input
        className="bg-gray-200 border-b-2 border-gray-500 p-2"
        type="password"
        placeholder="비밀번호"
      />
      <div className="flex justify-between items-center w-full">
        <button
          className="text-sm bg-transparent text-gray-500"
          onClick={() => navigate('/register/1')}
        >
          회원가입(이메일)
        </button>
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded"
          onClick={() => {}}
        >
          로그인
        </button>
      </div>
      <hr className="border-gray-300 w-full" />

      <div className="w-full flex justify-center">
        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default LoginArea;
