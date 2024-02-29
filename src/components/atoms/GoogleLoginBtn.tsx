import { useFadeIn } from '../../hooks/useFadeIn';
import GoogleLoginBtnImage from '../../assets/icons/googleLoginBtn.png';

const GoogleLoginBtn = () => {
  const opacity = useFadeIn(0, 1, 1000);

  const handleLoginClick = () => {
    console.log('Google Login Button clicked!');
  };

  return (
    <img
      src={GoogleLoginBtnImage}
      alt="Google Login Button"
      className="cursor-pointer transition-opacity duration-1000"
      style={{ opacity }}
      onClick={handleLoginClick}
    />
  );
};

export default GoogleLoginBtn;
