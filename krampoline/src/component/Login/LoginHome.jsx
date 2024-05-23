import { KAKAO_AUTH_URL } from '../../constants/oAuth';

const LoginHome = () => {
  const handleClickLoginButton = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return <button onClick={handleClickLoginButton}>login</button>;
};

export default LoginHome;
