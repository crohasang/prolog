import { useState, ChangeEvent } from 'react';
import IntroHeader from '../../components/organisms/IntroHeader';
import IntroBackGroundImage from '../../assets/images/introBackgroundImage.jpg';
import { useNavigate } from 'react-router-dom';
import { useFadeIn } from '../../hooks/useFadeIn';
import BlueBtn from '../../components/atoms/BlueBtn';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/instance';

const Register2 = () => {
  const navigate = useNavigate();
  const opacity = useFadeIn(0, 1, 500);

  // 닉네임
  const [nickname, setNickname] = useState<string>('');

  // 회원가입 가능 여부
  const [isRegisterDisable, setIsRegisterDisable] = useState<boolean>(true);

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  // 닉네임 중복 검사
  const nicknameCheckMutation = useMutation({
    mutationFn: (nickName: string) => {
      return instance.post('', nickName);
    },
    onSuccess: (res) => {
      // 닉네임이 중복인지 여부 (백엔드와 소통할 것)
      const isDuplicated = res.data.isDuplicated;

      if (isDuplicated === true) {
        alert('닉네임이 중복입니다!');

        // 입력한 닉네임 초기화
        setNickname('');
      } else {
        // 가입 버튼 Disable -> able
        setIsRegisterDisable(false);
      }
    },
  });

  // 중복 검사 클릭했을 때
  const handleNicknameCheck = () => {
    nicknameCheckMutation.mutate(nickname);
  };

  // const [email, setEmail] = useState<string>('');

  // const [password, setPassword] = useState<string>('');
  // const [passwordCheck, setPasswordCheck] = useState<string>('');

  // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setEmail(e.target.value);

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
            <BlueBtn title="중복 검사" onClick={handleNicknameCheck} />
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
              disabled={isRegisterDisable}
              onClick={() => navigate('/board')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
