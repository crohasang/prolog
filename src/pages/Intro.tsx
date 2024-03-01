import IntroHeader from '../components/organisms/IntroHeader';
import IntroTitle from '../components/atoms/Intro/IntroTitle';

import IntroBackGroundImage from '../assets/images/introBackgroundImage.jpg';

import GoogleLoginBtn from '../components/atoms/GoogleLoginBtn';
import EmailLoginBtn from '../components/atoms/EmailLoginBtn';
import EmailRegisterBtn from '../components/atoms/EmailRegisterBtn';

const Intro = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div
        className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${IntroBackGroundImage})` }}
      >
        <IntroHeader />

        <IntroTitle />

        <EmailLoginBtn />

        <EmailRegisterBtn />
        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default Intro;
