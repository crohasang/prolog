import IntroHeader from '../components/organisms/IntroHeader';
import IntroTitle from '../components/atoms/Intro/IntroTitle';

import IntroBackGroundImage from '../assets/images/introBackgroundImage.jpg';

import LoginArea from '../components/organisms/LoginArea';

const Intro = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div
        className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${IntroBackGroundImage})` }}
      >
        <IntroHeader />

        <div className="mt-2">
          <IntroTitle />
        </div>

        <div className="mt-8">
          <LoginArea />
        </div>
      </div>
    </div>
  );
};

export default Intro;
