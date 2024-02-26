import React from 'react';
import Header from '../../components/organisms/Header';
import IntroTitle from '../../components/atoms/IntroTitle';

import IntroBackgroundVideo from '../../assets/videos/introBackGroundVideo3.mp4';

const Intro = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        muted
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
      <Header />
      <div className="mt-[-20%]">
        <IntroTitle />
      </div>
    </div>
  );
};

export default Intro;
