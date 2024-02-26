import React from 'react';
import Header from '../../components/organisms/Header';
import IntroTitle from '../../components/atoms/IntroTitle';

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-[url('./assets/images/introBackGround.jpg')] bg-cover flex flex-col justify-center items-center">
      <Header />
      <div className="mt-[-20%]">
        <IntroTitle />
      </div>
    </div>
  );
};

export default Intro;
