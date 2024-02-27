import IntroHeader from '../components/organisms/IntroHeader';
import IntroTitle from '../components/atoms/Intro/IntroTitle';

import IntroBackgroundVideo from '../assets/videos/introBackGroundVideo3.mp4';
import KakaoLoginBtn from '../components/atoms/KakaoLoginBtn';

const Intro = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      >
        <source src={IntroBackgroundVideo} type="video/mp4" />
      </video>
      <IntroHeader />
      <div className="flex flex-col justify-center items-center space-y-20">
        <IntroTitle />
        <KakaoLoginBtn />
      </div>
    </div>
  );
};

export default Intro;
