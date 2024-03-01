import { useState, ChangeEvent } from 'react';
import IntroHeader from '../../components/organisms/IntroHeader';
import IntroBackGroundImage from '../../assets/images/introBackgroundImage.jpg';
import { useNavigate } from 'react-router-dom';

const Register2 = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div
        className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${IntroBackGroundImage})` }}
      >
        <IntroHeader />
        <div className="font-pretendard bg-gray-200 p-4 rounded max-w-sm mx-auto">
          <div className="text-xl font-bold mb-2">이메일</div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border-2 border-gray-200 p-2 mb-2 w-full"
            placeholder="이메일을 입력하세요"
          />
          {/* 이메일 중복 여부 버튼*/}
          <div className="text-xl font-bold mb-2">닉네임</div>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className="border-2 border-gray-200 p-2 mb-2 w-full"
            placeholder="닉네임을 입력하세요"
          />
          {/* 닉네임 중복 여부 버튼 */}
          <div className="text-xl font-bold mb-2">비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border-2 border-gray-200 p-2 mb-2 w-full"
            placeholder="비밀번호를 입력하세요"
          />
          <div className="w-full flex justify-end">
            <button
              className={`bg-blue-500 text-white py-1 px-2 rounded ${
                isChecked ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!isChecked}
              onClick={() => navigate('/board')}
            >
              가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
