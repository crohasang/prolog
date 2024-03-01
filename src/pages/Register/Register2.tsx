import { useState, ChangeEvent } from 'react';
import IntroHeader from '../../components/organisms/IntroHeader';
import IntroBackGroundImage from '../../assets/images/introBackgroundImage.jpg';
import { useNavigate } from 'react-router-dom';
import { useFadeIn } from '../../hooks/useFadeIn';
import BlueBtn from '../../components/atoms/BlueBtn';

const Register2 = () => {
  const navigate = useNavigate();
  const opacity = useFadeIn(0, 1, 500);

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
        <div
          className="font-pretendard bg-gray-200 p-4 rounded max-w-md mx-auto transition-opacity duration-1000 "
          style={{ opacity }}
        >
          <div className="text-xl font-bold ">이메일</div>
          <div className="flex items-center gap-x-4 mt-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border-2 border-gray-200 p-2 w-72"
              placeholder="이메일을 입력하세요"
            />
            <BlueBtn title="중복 검사" />
          </div>

          <div className="text-xl font-bold mt-2 ">닉네임</div>
          <div className="flex items-center gap-x-4 mt-2">
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="border-2 border-gray-200 p-2 w-72"
              placeholder="닉네임을 입력하세요"
            />
            <BlueBtn title="중복 검사" />
          </div>

          <div className="text-xl font-bold mt-2 ">비밀번호</div>
          <div className="flex items-center gap-x-4 mt-2">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-2 border-gray-200 p-2 w-72"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div className="w-full flex justify-end mt-10">
            <button
              className={`bg-blue-500 text-white py-1 px-2 rounded ${
                isChecked ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={true}
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
