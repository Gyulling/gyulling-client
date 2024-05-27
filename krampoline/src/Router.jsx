import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginCallback from './component/Login/LoginCallback';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import SelectPage from './pages/SelectPage';
import OnboardingPage from './pages/WaitingPage';

const Router = () => {
  const token = sessionStorage.getItem('token');
  const [homeComponent, setHomeComponent] = useState(<OnboardingPage />);

  useEffect(() => {
    setTimeout(() => {
      token ? setHomeComponent(<Home />) : setHomeComponent(<SelectPage />);
    }, 1500);
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homeComponent} />
        <Route path="/login/oauth2/callback" element={<LoginCallback />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
