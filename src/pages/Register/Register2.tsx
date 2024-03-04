import { useState, ChangeEvent } from 'react';
import IntroHeader from '../../components/organisms/IntroHeader';
import IntroBackGroundImage from '../../assets/images/introBackgroundImage.jpg';
import { useNavigate } from 'react-router-dom';
import { useFadeIn } from '../../hooks/useFadeIn';
import BlueBtn from '../../components/atoms/BlueBtn';

const Register2 = () => {
  const navigate = useNavigate();
  const opacity = useFadeIn(0, 1, 500);

  // const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [passwordCheck, setPasswordCheck] = useState<string>('');

  // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setEmail(e.target.value);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  // const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setPassword(e.target.value);

  // const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setPasswordCheck(e.target.value);

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
          {/* <div className="text-xl font-bold text-black">이메일</div>
          <div className="flex items-center gap-x-2 mt-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border-2 border-gray-200 p-2 w-64 text-black"
              placeholder="이메일을 입력하세요"
            />
            <BlueBtn title="중복 검사" />
          </div> */}

          <div className="text-xl font-bold mt-2 text-black ">닉네임</div>
          <div className="flex items-center gap-x-2 mt-2">
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="border-2 border-gray-200 p-2 w-64 text-black"
              placeholder="10자 이하로 입력해주세요"
            />
            <BlueBtn title="중복 검사" />
          </div>

          {/* <div className="text-xl font-bold mt-2 text-black ">비밀번호</div>
          <div className="flex items-center gap-x-2 mt-2">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-2 border-gray-200 p-2 w-64 text-black"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div className="text-xl font-bold mt-2 text-black">비밀번호 확인</div>
          <div className="flex items-center gap-x-2 mt-2">
            <input
              type="password"
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
              className="border-2 border-gray-200 p-2 w-64 text-black"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div> */}

          <div className="float-right mt-10">
            <BlueBtn
              title="가입하기"
              disabled={true}
              onClick={() => navigate('/board')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
