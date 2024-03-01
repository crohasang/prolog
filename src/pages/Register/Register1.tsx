import IntroHeader from '../../components/organisms/IntroHeader';
import IntroBackGroundImage from '../../assets/images/introBackgroundImage.jpg';

const Register1 = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div
        className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${IntroBackGroundImage})` }}
      >
        <IntroHeader />
      </div>
    </div>
  );
};

export default Register1;
