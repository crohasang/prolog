import { useState } from 'react';
import IntroHeader from '../../components/organisms/IntroHeader';
import IntroBackGroundImage from '../../assets/images/introBackgroundImage.jpg';
import { useNavigate } from 'react-router-dom';

const Register1 = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div
        className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${IntroBackGroundImage})` }}
      >
        <IntroHeader />
        <div className="font-pretendard bg-gray-200 p-4 rounded max-w-sm mx-auto">
          <div className="text-xl font-bold mb-2">PROlog 개인정보 처리방침</div>
          <p className="mb-2">
            정보통신망 이용촉진 등에 관한 법률 등 관련 법률에 의한 개인정보
            보호규정 및 정보통신부가 제정한 개인정보지침을 준수하고 있습니다.
          </p>
          <p className="mb-2">
            1. 개인정보의 수집 항목: 원활한 서비스 이용과 고객과의 소통을 위해
            수집합니다. 필수항목: 이메일
          </p>
          <p className="mb-2">
            2. 개인정보의 수집 방법: 회원 가입 시에 필수항목 기재를 요청합니다.
          </p>
          <p className="mb-2">
            3. 개인정보의 수집 이용 목적: 이메일: 회원 가입시에 사용자확인,
            중복가입 방지, 부정 이용 방지를 위한 목적으로 사용합니다.
          </p>
          <p className="mb-2">
            개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만,
            동의를 거부할 경우 회원가입, 회원 서비스, 로그인 서비스가 제한될 수
            있습니다.
          </p>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="mr-2"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="agree">
              [필수] 개인정보 취급방침에 동의합니다.
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className={`bg-blue-500 text-white py-1 px-2 rounded ${
                isChecked ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!isChecked}
              onClick={() => navigate('/register/2')}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register1;
