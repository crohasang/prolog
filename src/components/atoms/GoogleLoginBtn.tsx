import { useFadeIn } from '../../hooks/useFadeIn';
import GoogleLoginBtnImage from '../../assets/icons/googleLoginBtn.png';

const GoogleLoginBtn = () => {
  const opacity = useFadeIn(0, 1, 1000);

  const handleLoginClick = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=code
		&scope=email profile`;
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
